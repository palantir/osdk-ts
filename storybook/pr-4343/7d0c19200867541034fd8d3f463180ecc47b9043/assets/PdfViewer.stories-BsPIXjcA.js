import{j as r,M as s}from"./iframe-DnJOFPSX.js";import{P as p}from"./pdf-viewer-BunDKOhk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5IK9rQHs.js";import"./preload-helper-DE0LB-In.js";import"./PdfViewer-Dx_fHvoO.js";import"./index-BsrGUZmH.js";import"./BasePdfViewer-CaIfduJo.js";import"./BasePdfViewer.module.css-B0Lxj-Jx.js";import"./PdfViewerAnnotationLayer-B2aGTmdy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxTlIt42.js";import"./PdfViewerOutlineSidebar-6pU1LbIu.js";import"./PdfViewerSidebarHeader-C49DST9Q.js";import"./useBaseUiId-BmOtxMBQ.js";import"./useControlled-LZY0zNEU.js";import"./CompositeRoot--UloWT4z.js";import"./CompositeItem-C0xu2aal.js";import"./ToolbarRootContext-C0ive6C5.js";import"./composite-ActYTO9Q.js";import"./svgIconContainer-C9e6psM5.js";import"./PdfViewerSearchBar-CQQzP6Rn.js";import"./chevron-up-CQ9DGpiu.js";import"./chevron-down-DnnfJ5YY.js";import"./cross-RxTC7yT1.js";import"./PdfViewerSidebar-B8Wq54r8.js";import"./index-Dz6yRx1S.js";import"./index-C47JnOK2.js";import"./index-CN_nZvI2.js";import"./PdfViewerToolbar-DFQIHX6H.js";import"./Button-cZ9KvtCU.js";import"./chevron-right-DZ_0zxjG.js";import"./Input-DAAzhLOd.js";import"./search-1uNTCuXG.js";import"./spin-fD4iwopV.js";import"./error-BL2HC2Sp.js";import"./withOsdkMetrics-DbwiXd_V.js";import"./makeExternalStore-CKgPh2OO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
