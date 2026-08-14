import{j as r,M as s}from"./iframe-DMVoJ4iR.js";import{P as p}from"./pdf-viewer-DCAkCsFF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdeiPvLf.js";import"./preload-helper-2MgHTXqS.js";import"./PdfViewer-1WR2vQR5.js";import"./index-DMn9f8R_.js";import"./BasePdfViewer-Bw2lcRq0.js";import"./BasePdfViewer.module.css-xfYbAvHZ.js";import"./PdfViewerAnnotationLayer-DKJPboBo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Iv3F_5We.js";import"./PdfViewerOutlineSidebar-DJbS7-73.js";import"./PdfViewerSidebarHeader-D3c2gJVQ.js";import"./useBaseUiId-CxU24xuc.js";import"./useControlled-DdseA8EX.js";import"./CompositeRoot-BZSiebQy.js";import"./CompositeItem-CMnhxWHR.js";import"./ToolbarRootContext-f6svvjDU.js";import"./composite-DmDE7Rtt.js";import"./svgIconContainer-DGDnniJF.js";import"./PdfViewerSearchBar-D3Rv5L1x.js";import"./chevron-up-QVrCZGdL.js";import"./chevron-down-vsY3HQGw.js";import"./cross-hEjpS1Bp.js";import"./PdfViewerSidebar-Cjasrf9p.js";import"./index-Bi0z85-I.js";import"./index-B7aWWKWU.js";import"./index-C4IlvH8x.js";import"./PdfViewerToolbar-HmHx3QXc.js";import"./Button-BBvvoDF0.js";import"./chevron-right-BJxmDBri.js";import"./Input-B15zNfFM.js";import"./search-DV_7XP2q.js";import"./spin-maX5XuA_.js";import"./error-xQuPRzcR.js";import"./withOsdkMetrics-B2MB7rwG.js";import"./makeExternalStore-DIAkKSQj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
