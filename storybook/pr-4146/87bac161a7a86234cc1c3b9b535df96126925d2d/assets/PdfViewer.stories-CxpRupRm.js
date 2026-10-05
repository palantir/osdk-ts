import{j as r,M as s}from"./iframe-D4hrQN2M.js";import{P as p}from"./pdf-viewer-CW-1YmMX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DIOz_esr.js";import"./preload-helper-sZ7GZnTp.js";import"./PdfViewer-CdXBxm8N.js";import"./index-TJFGWmSW.js";import"./BasePdfViewer-CkXFtcUl.js";import"./BasePdfViewer.module.css-B0tz_RJb.js";import"./PdfViewerAnnotationLayer-Q1pvBdai.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRjRqGp5.js";import"./PdfViewerOutlineSidebar-CyepzVJu.js";import"./PdfViewerSidebarHeader-hZtP_2ly.js";import"./useBaseUiId-Dd8SLm5U.js";import"./useControlled-D7NqC10F.js";import"./CompositeRoot-CGN01IcJ.js";import"./CompositeItem-D42qWJYi.js";import"./ToolbarRootContext-A7T_D51T.js";import"./composite-CR-Dz-Ek.js";import"./svgIconContainer-B2XpTIGD.js";import"./PdfViewerSearchBar-DxDeydOR.js";import"./chevron-up-3Y132dp_.js";import"./chevron-down-CPNs7Pbe.js";import"./cross-DpkqXaMH.js";import"./PdfViewerSidebar-uiovWacE.js";import"./index-CFuoKysS.js";import"./index-DLnqSt_k.js";import"./index-BRhC0vEw.js";import"./PdfViewerToolbar-DkEGP7RJ.js";import"./Button-C5ajAHO-.js";import"./chevron-right-t4AJQ12P.js";import"./Input-CkxkdCMO.js";import"./search-D1Xzl9P3.js";import"./spin-ojDpX_g_.js";import"./error-DLpDeju-.js";import"./withOsdkMetrics-V-TF07Pc.js";import"./makeExternalStore-CT9_9BER.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
