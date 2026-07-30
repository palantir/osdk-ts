import{j as r,M as s}from"./iframe-DW5kExRz.js";import{P as p}from"./pdf-viewer-BLPzfb6o.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CpAhgUiI.js";import"./preload-helper-BnxWtWaG.js";import"./PdfRenderer-HZWMrlJt.js";import"./index-CflAnjSB.js";import"./PdfViewer-DaIziQP1.js";import"./PdfViewer.module.css-CDMEZTGY.js";import"./PdfViewerAnnotationLayer-CDEUIu0z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHAiEone.js";import"./PdfViewerOutlineSidebar-DQWZBVes.js";import"./PdfViewerSidebarHeader-CAkOqdCj.js";import"./useBaseUiId-CmNJn8Jo.js";import"./useControlled-dYbeX3BT.js";import"./CompositeRoot-DeBmcuKN.js";import"./CompositeItem-CQlwhU_S.js";import"./ToolbarRootContext-BwqzssRh.js";import"./composite-BLexdKxo.js";import"./svgIconContainer-dsPCmsB5.js";import"./PdfViewerSearchBar-DXciOQyr.js";import"./chevron-up-Cy5JPXmC.js";import"./chevron-down-D4OFZDT7.js";import"./cross-BXaETxpe.js";import"./PdfViewerSidebar-mo1ii7Lr.js";import"./index-Dy-i2J-X.js";import"./index-DH8-sclq.js";import"./index-Cf8c--ed.js";import"./PdfViewerToolbar-B0S3ZhO4.js";import"./Button-D0EqJKRJ.js";import"./chevron-right-D2OwNGvu.js";import"./Input-BFC96i5B.js";import"./search-BHsGOBSH.js";import"./spin-V0TIhFEd.js";import"./error-TNuapbIk.js";import"./withOsdkMetrics-CBpR0MwW.js";import"./makeExternalStore-D3UQvTf-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
