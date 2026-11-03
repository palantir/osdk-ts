import{j as r,M as s}from"./iframe-Beajvbu-.js";import{P as p}from"./pdf-viewer-DYR_nw5Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpMHFZlY.js";import"./preload-helper-dZkoR4F_.js";import"./PdfViewer-BOzvrdjd.js";import"./index-AV0Zt5q4.js";import"./BasePdfViewer-D4N8WSGv.js";import"./BasePdfViewer.module.css-DGRKEZqW.js";import"./PdfViewerAnnotationLayer-CgSf8w1X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dq5KqhDI.js";import"./PdfViewerOutlineSidebar-DoLarpIB.js";import"./PdfViewerSidebarHeader-BbY1CCG6.js";import"./useBaseUiId-D9Gk7Ps8.js";import"./useControlled-BgXewBwk.js";import"./CompositeRoot-X2byanou.js";import"./CompositeItem-Dxfd76IV.js";import"./ToolbarRootContext-DQCYszJ6.js";import"./composite-B77JxL2r.js";import"./svgIconContainer-BOWvIcxU.js";import"./PdfViewerSearchBar-DUa259pU.js";import"./chevron-up-CgFVH5HQ.js";import"./chevron-down-BTZVhACL.js";import"./cross-KOMA-dmo.js";import"./PdfViewerSidebar-BooLwoXe.js";import"./index-BEqze36e.js";import"./index-DJbbiMo-.js";import"./index-DHfuPCUx.js";import"./PdfViewerToolbar-BeaqlzjG.js";import"./Button-D4EG1oUS.js";import"./chevron-right-89G2sBsM.js";import"./Input-CusKMl7d.js";import"./search-WL4FSHko.js";import"./spin-B-LRyUgr.js";import"./error-DahJGZf3.js";import"./withOsdkMetrics-QZ1lgR_i.js";import"./makeExternalStore-t469AycL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
