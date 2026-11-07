import{j as r,M as s}from"./iframe-DQCdqfg5.js";import{P as p}from"./pdf-viewer-CQinv7ip.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-zfxELSkR.js";import"./preload-helper-BnuMKywq.js";import"./PdfViewer-B5duoBaw.js";import"./index-vgggs2zv.js";import"./BasePdfViewer-CrYmesH1.js";import"./BasePdfViewer.module.css-BnZxpxlw.js";import"./PdfViewerAnnotationLayer-DmETf7cf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDv9H9YU.js";import"./PdfViewerOutlineSidebar-D8MF2oY0.js";import"./PdfViewerSidebarHeader-CONtcqSr.js";import"./useBaseUiId-uJtwceXU.js";import"./useControlled-ChMbt_Fz.js";import"./CompositeRoot-NOBl9W0a.js";import"./CompositeItem-BV9j03E3.js";import"./ToolbarRootContext-DIjdh_Ow.js";import"./composite-CLQo-Wfa.js";import"./svgIconContainer-DQ3vDY3d.js";import"./PdfViewerSearchBar-lfQQ8q8r.js";import"./chevron-up-CW7S1XHj.js";import"./chevron-down-s9at5FCB.js";import"./cross-BM5-gN2O.js";import"./PdfViewerSidebar-D67PNxCi.js";import"./index-C7x5V-MA.js";import"./index-BsqPh63C.js";import"./index-TXPEMxyc.js";import"./PdfViewerToolbar-BpZ28K4J.js";import"./Button-DNN3wzC1.js";import"./chevron-right-IKNFq6mH.js";import"./Input-BTifrhUx.js";import"./search-BVksAAy0.js";import"./spin-BRf9454e.js";import"./error-LGbg2EdJ.js";import"./withOsdkMetrics-B1flG_2m.js";import"./makeExternalStore-DhC3eF_c.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
