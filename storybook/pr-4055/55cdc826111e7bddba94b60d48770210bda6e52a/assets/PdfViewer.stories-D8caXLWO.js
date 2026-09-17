import{j as r,M as s}from"./iframe-DI00rnMc.js";import{P as p}from"./pdf-viewer-DfCBd-wj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8zsJCmnZ.js";import"./preload-helper-Bhha9UTp.js";import"./PdfViewer-Dha_miXE.js";import"./index-Brq0evln.js";import"./BasePdfViewer-DP4H-pZ7.js";import"./BasePdfViewer.module.css-E5miPEgI.js";import"./PdfViewerAnnotationLayer-CF0EZDPw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwbvIqMX.js";import"./PdfViewerOutlineSidebar-Cfkej_op.js";import"./PdfViewerSidebarHeader-DjFg_YIt.js";import"./useBaseUiId-6U9MPwLo.js";import"./useControlled-C2-apkIG.js";import"./CompositeRoot-DwlveJ0d.js";import"./CompositeItem-PKIDUwep.js";import"./ToolbarRootContext-BVNpcmSf.js";import"./composite-UOsa0WMB.js";import"./svgIconContainer-DP5UNNJ5.js";import"./PdfViewerSearchBar-qUnvv53d.js";import"./chevron-up-Cv0Ov80M.js";import"./chevron-down-ihi9Dc4D.js";import"./cross-6J7bJBxX.js";import"./PdfViewerSidebar-ULqlirPT.js";import"./index-D6jwq80D.js";import"./index-Chs62TH6.js";import"./index-Dd09UFHP.js";import"./PdfViewerToolbar-DKxsgPFW.js";import"./Button-7EKbW6_f.js";import"./chevron-right-CTI0RGOm.js";import"./Input-5eKJv0PC.js";import"./search-D078c5Qn.js";import"./spin-BjLXKoWA.js";import"./error-CCbSqJWm.js";import"./withOsdkMetrics-DT1mwdZ-.js";import"./makeExternalStore-qZ-zko2S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
