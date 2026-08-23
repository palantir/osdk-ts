import{j as r,M as s}from"./iframe-Dyt2g367.js";import{P as p}from"./pdf-viewer-BTzb6GXc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bkzfiprm.js";import"./preload-helper-Iy-_aWsL.js";import"./PdfViewer-DzVRdGFH.js";import"./index-CVbuIiNF.js";import"./BasePdfViewer-C13h1wiq.js";import"./BasePdfViewer.module.css-uBBDHe6Y.js";import"./PdfViewerAnnotationLayer-C4wf39SO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxkJE1G9.js";import"./PdfViewerOutlineSidebar-CO33q4-D.js";import"./PdfViewerSidebarHeader-DtflvqTJ.js";import"./useBaseUiId-CNdrP4cM.js";import"./useControlled-B5GqLh5A.js";import"./CompositeRoot-BK3H_1wo.js";import"./CompositeItem-GHEjzrAu.js";import"./ToolbarRootContext-DbHSAu67.js";import"./composite-CioN3i6x.js";import"./svgIconContainer-CQnuEYht.js";import"./PdfViewerSearchBar-Bi1Go1Me.js";import"./chevron-up-FtSrcJ6J.js";import"./chevron-down-CoqmzOf8.js";import"./cross-BGMDayEl.js";import"./PdfViewerSidebar-DiyLr-nK.js";import"./index-FIX-qPnt.js";import"./index-C3uS1quW.js";import"./index-DX_nn_2Y.js";import"./PdfViewerToolbar-CiQR2pkA.js";import"./Button-RkRB1WVt.js";import"./chevron-right-CyOSRYXU.js";import"./Input-EjY_nd8e.js";import"./search-Dlesc_Bn.js";import"./spin-BIkmOcn4.js";import"./error-CoUpGJie.js";import"./withOsdkMetrics-C7K3xDQn.js";import"./makeExternalStore-CoWyK-bl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
