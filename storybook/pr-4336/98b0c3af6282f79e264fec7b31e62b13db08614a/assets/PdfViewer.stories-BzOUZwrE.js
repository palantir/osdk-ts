import{j as r,M as s}from"./iframe-fiDzxSac.js";import{P as p}from"./pdf-viewer-1m4S2JhM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTUiIk75.js";import"./preload-helper-vUH8WtXv.js";import"./PdfViewer-CMc30JoN.js";import"./index-RsLmo9Ef.js";import"./BasePdfViewer-Czf_glmY.js";import"./BasePdfViewer.module.css-C8w1JCtv.js";import"./PdfViewerAnnotationLayer-DYx0WRwy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU_1d-ID.js";import"./PdfViewerOutlineSidebar-DdkCF9Wx.js";import"./PdfViewerSidebarHeader-B6oLNyKf.js";import"./useBaseUiId-D5crqalZ.js";import"./useControlled-CY87ml-W.js";import"./CompositeRoot-DJUtzFK0.js";import"./CompositeItem-CFHCXDOZ.js";import"./ToolbarRootContext-C3QdEmtK.js";import"./composite-BaurXFau.js";import"./svgIconContainer-DuFQRV6L.js";import"./PdfViewerSearchBar-BRXMLXRB.js";import"./chevron-up-CdmodP9H.js";import"./chevron-down-BeNvA5Jp.js";import"./cross-Dj0Tr1LR.js";import"./PdfViewerSidebar-C-uHoc0N.js";import"./index-CxuMtNmx.js";import"./index-ZxWxF6R4.js";import"./index-CFMoivIb.js";import"./PdfViewerToolbar-CClbqGay.js";import"./Button-BF-ip-LD.js";import"./chevron-right-BmDtbV82.js";import"./Input-kfNjj_-b.js";import"./search-B0MLGd_Y.js";import"./spin-BvpJ_biI.js";import"./error-DWaVmqt2.js";import"./withOsdkMetrics-CGcDstXp.js";import"./makeExternalStore-GIa5UA4P.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
