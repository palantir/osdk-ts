import{j as r,M as s}from"./iframe-DV1yCMsw.js";import{P as p}from"./pdf-viewer-CPkNgWqJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CXu_yoD4.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-DCh8m0jM.js";import"./index-azQz1-D1.js";import"./BasePdfViewer-C_B7Uihd.js";import"./BasePdfViewer.module.css-CldYZTFf.js";import"./PdfViewerAnnotationLayer-CMIwvdBa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--NZmZK1u.js";import"./PdfViewerOutlineSidebar-Xvo3Z9PQ.js";import"./PdfViewerSidebarHeader-BDmsLtvd.js";import"./useBaseUiId-DOZms5KT.js";import"./useControlled-nUfbdO0a.js";import"./CompositeRoot-h-pSMY_x.js";import"./CompositeItem-BUg5Nmhs.js";import"./ToolbarRootContext-0T6zDh9h.js";import"./composite-DfXvakAK.js";import"./svgIconContainer-BeM6_7kW.js";import"./PdfViewerSearchBar-BAWyjSCX.js";import"./chevron-up-XqimV38q.js";import"./chevron-down-GWsulQRf.js";import"./cross-DNR9YQ3a.js";import"./PdfViewerSidebar-CUyYDjaJ.js";import"./index-BVIyipfq.js";import"./index--Byjp6h8.js";import"./index-CmQmrs9R.js";import"./PdfViewerToolbar-zuQ_BnHn.js";import"./Button-DPHupdFu.js";import"./chevron-right-Cv_WMN9R.js";import"./Input-PDMkMKii.js";import"./search-CQsBxLkU.js";import"./spin-DWi_IHHf.js";import"./error-t-4CnxKH.js";import"./withOsdkMetrics-DNZcGQG2.js";import"./makeExternalStore-0Z503ATJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
