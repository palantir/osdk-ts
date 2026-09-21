import{j as r,M as s}from"./iframe-DiEonpI4.js";import{P as p}from"./pdf-viewer-DZ-xXRfh.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-PdceNzJ-.js";import"./preload-helper-CK-k_2Vt.js";import"./PdfViewer-BoKSYdI9.js";import"./index-emI1jrST.js";import"./BasePdfViewer-BfbbWIQa.js";import"./BasePdfViewer.module.css-BQT-XRwc.js";import"./PdfViewerAnnotationLayer-QUcdYEa0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBERQeAC.js";import"./PdfViewerOutlineSidebar-C7CgIbKV.js";import"./PdfViewerSidebarHeader-D5Y3XgZE.js";import"./useBaseUiId-vTxFcR1B.js";import"./useControlled-BXxbQ2_H.js";import"./CompositeRoot-DGseI8pu.js";import"./CompositeItem-Cogr6rzU.js";import"./ToolbarRootContext-D-kjOzEz.js";import"./composite-CGrPsAxE.js";import"./svgIconContainer-HP-rjnIi.js";import"./PdfViewerSearchBar-CkDdtU0N.js";import"./chevron-up-BaNE1fiu.js";import"./chevron-down-C-r7fv-U.js";import"./cross-Dk3kDcDy.js";import"./PdfViewerSidebar-CW9f_rpx.js";import"./index-DL9fAFGC.js";import"./index-CLd9qPG2.js";import"./index-Ds0MF9yD.js";import"./PdfViewerToolbar-CCpbMrqw.js";import"./Button-DUYCFQGz.js";import"./chevron-right-qoy3gT1g.js";import"./Input-DeBBkK_j.js";import"./search-BguN7d-l.js";import"./spin-Du-s2C-g.js";import"./error-DiLLCp_W.js";import"./withOsdkMetrics-CSqvl8Bo.js";import"./makeExternalStore-BUkIaKmg.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
