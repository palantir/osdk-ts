import{j as r,M as s}from"./iframe-DasplHZn.js";import{P as p}from"./pdf-viewer-BQSxCJSG.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-2fpt_Vai.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DCWQxA98.js";import"./index-CeKhiTUl.js";import"./BasePdfViewer-DknzPzbc.js";import"./BasePdfViewer.module.css-CUWcTniU.js";import"./PdfViewerAnnotationLayer-Cbgz_VC1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qDpS9C1O.js";import"./PdfViewerOutlineSidebar-CJLCR0il.js";import"./PdfViewerSidebarHeader-DqpgSA_3.js";import"./useBaseUiId-CFSgFdOV.js";import"./useControlled-b2VLkkxd.js";import"./CompositeRoot-CBKnErdx.js";import"./CompositeItem-zs15jyVw.js";import"./ToolbarRootContext-Dd8U4Uqb.js";import"./composite-BErfcKSH.js";import"./svgIconContainer-4_eO9YAc.js";import"./PdfViewerSearchBar-D2Aw-X1i.js";import"./chevron-up-DFmBdcUS.js";import"./chevron-down-Clwkouj3.js";import"./cross-CGwwcGII.js";import"./PdfViewerSidebar-Bknxmlcd.js";import"./index-S98LG7pS.js";import"./index-BtmJPZwK.js";import"./index-BbWiAGjR.js";import"./PdfViewerToolbar-C5f4NMYI.js";import"./Button-CUXeq1Mn.js";import"./chevron-right-CkJ4_jtj.js";import"./Input-CTs-cY20.js";import"./search-DjIePqPD.js";import"./spin-Cu7lqauu.js";import"./error-DJObYT-e.js";import"./withOsdkMetrics-DI4FVnTC.js";import"./makeExternalStore-Ce3vwrCY.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
