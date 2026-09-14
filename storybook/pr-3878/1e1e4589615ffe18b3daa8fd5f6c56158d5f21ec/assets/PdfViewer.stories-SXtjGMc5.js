import{j as r,M as s}from"./iframe-D3DqoIpf.js";import{P as p}from"./pdf-viewer-l497D7JD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BfJpR7Gi.js";import"./preload-helper-Bur1EzB5.js";import"./PdfViewer-DbdwoUHt.js";import"./index-BThkDgxi.js";import"./BasePdfViewer-DL23GOIJ.js";import"./BasePdfViewer.module.css-CcMsLr7e.js";import"./PdfViewerAnnotationLayer-D4QzSA3a.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BmX7mwlz.js";import"./PdfViewerOutlineSidebar-cchSn3UI.js";import"./PdfViewerSidebarHeader-BaLzpeeU.js";import"./useBaseUiId-BOGuxokK.js";import"./useControlled-R3QnTpFh.js";import"./CompositeRoot-BwtDdD6K.js";import"./CompositeItem-DmhK9sjv.js";import"./ToolbarRootContext-FLVSUoPt.js";import"./composite-DOJBzh5B.js";import"./svgIconContainer-CoUDa19N.js";import"./PdfViewerSearchBar-CDDhgIJ_.js";import"./chevron-up-815Id4Y3.js";import"./chevron-down-BYhG0KSh.js";import"./cross-CAMhptAD.js";import"./PdfViewerSidebar-DPqpqqHc.js";import"./index-CAWoAfLN.js";import"./index-BF36rFqh.js";import"./index-CaWcagsp.js";import"./PdfViewerToolbar-CHQat-FS.js";import"./Button-D1m-bnZN.js";import"./chevron-right-CxssO9Qg.js";import"./Input-Ba9sqiE-.js";import"./search-DzOWxMYj.js";import"./spin-8NRwUARL.js";import"./error-DmP3oCyF.js";import"./withOsdkMetrics-Dzhtom8t.js";import"./makeExternalStore-CWigMI40.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
