import{j as r,M as s}from"./iframe-bRpqvs55.js";import{P as p}from"./pdf-viewer-DAs6Mc4B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DbcVJIsS.js";import"./preload-helper-C6x1Ezwe.js";import"./PdfViewer-CR_ov0Tr.js";import"./index-BIhwktUh.js";import"./BasePdfViewer-D7gojIpW.js";import"./BasePdfViewer.module.css-C_PlccuL.js";import"./PdfViewerAnnotationLayer-3uSTF_yz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CE11E-rv.js";import"./PdfViewerOutlineSidebar-bIAyrzfO.js";import"./PdfViewerSidebarHeader-sniKAxPf.js";import"./useBaseUiId-DlF45aum.js";import"./useControlled-Bp_OFH7Y.js";import"./CompositeRoot-Ci2IE8La.js";import"./CompositeItem-Cz1caG-o.js";import"./ToolbarRootContext-BWkwcBK1.js";import"./composite-eCHjWiuj.js";import"./svgIconContainer-Bb8sMP7z.js";import"./PdfViewerSearchBar-Z17QHkGe.js";import"./chevron-up-BRTZt5KK.js";import"./chevron-down-hYv0Ya8W.js";import"./cross-W-3E-IIi.js";import"./PdfViewerSidebar-DGltmeOh.js";import"./index-sU6oAp9b.js";import"./index-D6zU7-mJ.js";import"./index-D5Q_aXSH.js";import"./PdfViewerToolbar-BUwvXhey.js";import"./Button-0l6_p_5m.js";import"./chevron-right-BCnZwXd9.js";import"./Input-prVuRYoh.js";import"./search-CyiikVap.js";import"./spin-DsGZYMOO.js";import"./error-DYIwcxmR.js";import"./withOsdkMetrics-BMXSfQyV.js";import"./makeExternalStore-BuZjAFov.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
