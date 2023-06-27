import { Cfc } from "../components/tests/single_tests/Cfc";
import { Cft } from "../components/tests/single_tests/Cft";
import { Cfu } from "../components/tests/single_tests/Cfu";
import { Cmr } from "../components/tests/single_tests/Cmr";
import { Cms } from "../components/tests/single_tests/Cms";
import { Dfu } from "../components/tests/single_tests/Dfu";
import { Efu } from "../components/tests/single_tests/Efu";
import { Mfu } from "../components/tests/single_tests/Mfu";
import { Mss } from "../components/tests/single_tests/Mss";
import { Msu } from "../components/tests/single_tests/Msu";
import { Nfu } from "../components/tests/single_tests/Nfu";
import { Nst } from "../components/tests/single_tests/Nst";


const soi_tests = {
    'cfc': {
        component: <Cfc />,
        description: 'Cognition of Figural Classes (CFC) is the ability to identify the class or classes to which a presented figure belongs. It is strictly figural classification since the student does not need to know the name of the class.'
    },
    'cft': {
        component: <Cft />,
        description: 'Cognition of Figural Transformation (CFT) is the ability to transform figures and to recognize a figure when it has been rotated into a new orientation. This is a test of the student\'s ability to transform figures ­and recognize them.'
    },
    'cfu': {
        component: <Cfu />,
        description: 'Cognition of Figural Units (CFU) is the ability to recognize familiar figures that have been partially obscured. This ability is one of the prerequisites for learning to read and has been found to be significantly related to successful reading.'
    },
    'cmr': {
        component: <Cmr />,
        description: 'Cognition of seMantic Relations (CMR) is the ability to see relationships between meanings of words or ideas. In this test of semantic relations the task is to identify what comes in between two stimulus items. The relation­ships vary, some are temporal, some are historical, some are quantitative, etc..'
    },
    'cms': {
        component: <Cms />,
        description: 'Cognition of Semantic Systems (CMS) is the ability to to understand relatively complex and difficult ideas. In this test you must translate a verbal description through a set of word-shape equivalences into a set of shape relationships. This is a type of form reasoning. The shapes are simple and the concepts are well known.'
    },
    'dfu': {
        component: <Dfu />,
        description: 'Divergent production of Figural-Units (DFU) is the ability to produce many figures conforming to simple specifications. This is a test of the student\'s ability to produce different figural units, an elementary test of creativity.'
    },
    'efu': {
        component: <Efu />,
        description: 'Evaluation of Figural Units (EFU) is the ability to judge units of figural information as being similar or different. In this test the student compares figures to find the one that exactly matches the test figure. Failure on this test may indicate problems with visual perceptual abilities, and should be followed up with additional testing and/or referral since this ability is a critical one for reading.'
    },
    'mfu': {
        component: <Mfu />,
        description: 'Memory of Figural Units (MFU) is the ability to remember given figural objects. The task here is very simple and direct, the students have seen a number of figures during the administration of the test; now the student is asked to identify, from memory, which of the figures are in the book and which are not.'
    },
    'mss': {
        component: <Mss />,
        description: 'Memory of Symbolic Systems (MSS) is the ability to remember the order of symbolic information. This is a memory test of symbols, but since the students are required to recall the digits in reverse order, the test requires systems level thinking. There are separate instructions for the auditory and visual modes of administration.'
    },
    'msu': {
        component: <Msu />,
        description: 'Memory of Symbolic Units (MSU) is the ability to remember isolated items of symbolic information, such as syllables and words. This is a memory test of symbols. It can be administered visually, if the students can read numbers. If they cannot read or write numbers, then administer the test verbally and you record their verbal responses on the test protocol.'
    },
    'nfu': {
        component: <Nfu />,
        description: 'coNvergent Production of Figural Units (NFU) is the ability to coordinate eye to hand. This test contains figures commonly used in perceptual motor and psycho-motor tests. It also gives an indication of eye-hand coordination integrity. This ability is a necessary one for writing and printing.'
    },
    'nst': {
        component: <Nst />,
        description: 'coNvergent Production of Symbolic Transformations (NST) is the ability to produce new symbolic items of information by revising given items. In its easier form it requires no more than the recognition of symbols in the context of other symbols. In the next more difficult form, the test requires some reading skills since the student is asked to separate words in a run-on sentence string.'
    }
}

const soi_abilities = {
    'operation': {
        'divergent-production': [], // DFU not available
        'convergent-production':['nst'], // NFU not available
        'evaluation':           ['efu'],
        'memory':               ['msu', 'mss', 'mfu'],
        'cognition':            ['cfu', 'cfc', 'cft', 'cmr', 'cms']
    },
    'content': {
        'figural':              ['cfu', 'cfc', 'cft', 'efu', 'mfu'], // DFU, NFU not available
        'symbolic':             ['nst', 'msu', 'mss'],
        'semantic':             ['cmr', 'cms'],
        'behavioral':           []
    },
    'product': {
        'units':                ['cfu', 'efu', 'msu', 'mfu'], // DFU, NFU not available
        'classes':              ['cfc'],
        'relations':            ['cmr'],
        'systems':              ['cms', 'mss'],
        'transformations':      ['cft', 'nst']
    }
}

const pick = (obj, ...args) => ({
    ...args.reduce((res, key) => ({ ...res, [key]: obj[key] }), { })
})

const get_tests_sequence = (ability_id) => {
    let seq = []
    Object.values(soi_abilities).forEach(e => {
        if (Object.keys(e).includes(ability_id)) {
            seq = pick(soi_tests, ...e[ability_id])
        }
    })
    return seq
}

export { soi_tests, soi_abilities, get_tests_sequence }