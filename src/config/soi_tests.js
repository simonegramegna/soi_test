import { Cfc } from "../components/tests/cognition/Cfc";
import { Cft } from "../components/tests/cognition/Cft";
import { Cfu } from "../components/tests/cognition/Cfu";
import { Cmr } from "../components/tests/cognition/Cmr";
import { Cms } from "../components/tests/cognition/Cms";

const soi_tests = {
    'cfu': {
        component: <Cfu />,
        description: 'Cognition of Figural Units (CFU) is the ability to recognize familiar figures that have been partially obscured. This ability is one of the prerequisites for learning to read and has been found to be significantly related to successful reading.'
    },
    'cfc': {
        component: <Cfc />,
        description: 'Cognition of Figural Classes (CFC) is the ability to identify the class or classes to which a presented figure belongs. It is strictly figural classification since the student does not need to know the name of the class.'
    },
    'cft': {
        component: <Cft />,
        description: 'Cognition of Figural Transformation (CFT) is the ability to transform figures and to recognize a figure when it has been rotated into a new orientation. This is a test of the student\'s ability to transform figures ­and recognize them.'
    },
    'cmr': {
        component: <Cmr />,
        description: 'Cognition of seMantic Relations (CMR) is the ability to see relationships between meanings of words or ideas. In this test of semantic relations the task is to identify what comes in between two stimulus items. The relation­ships vary, some are temporal, some are historical, some are quantitative, etc..'
    },
    'cms': {
        component: <Cms />,
        description: 'Cognition of Semantic Systems (CMS) is the ability to to understand relatively complex and difficult ideas. In this test you must translate a verbal description through a set of word-shape equivalences into a set of shape relationships. This is a type of form reasoning. The shapes are simple and the concepts are well known.'
    }
}

export { soi_tests }