import{j as r,M as s}from"./iframe-5Yblr-NW.js";import{P as p}from"./pdf-viewer-DhYTi_h8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDI3RHuT.js";import"./preload-helper-Btewyy37.js";import"./PdfViewer-thD_Y9u2.js";import"./index-DhSuFMxY.js";import"./BasePdfViewer-DZuZ2OB2.js";import"./BasePdfViewer.module.css-DHFFb9zf.js";import"./PdfViewerAnnotationLayer-Fu2HKRJ-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7d9prF51.js";import"./PdfViewerOutlineSidebar-C4oYXuuc.js";import"./PdfViewerSidebarHeader-DVSOSBEb.js";import"./useBaseUiId-CAIjkwyZ.js";import"./useControlled-CA2G7MeH.js";import"./CompositeRoot-B8Tv89gA.js";import"./CompositeItem-DP9Ij0vi.js";import"./ToolbarRootContext-Cm13ddJg.js";import"./composite-koNAMkMV.js";import"./svgIconContainer-C-JdNNRF.js";import"./PdfViewerSearchBar-Bvuw63jC.js";import"./chevron-up-Dso9Krip.js";import"./chevron-down-CwlGMO0g.js";import"./cross-AcYogNoU.js";import"./PdfViewerSidebar-BnWKAX5M.js";import"./index-D3dVTsWE.js";import"./index-CCrwpy9x.js";import"./index-Dy445fm6.js";import"./PdfViewerToolbar-DqQPJ1lz.js";import"./Button-MK9UA-SJ.js";import"./chevron-right-BYZbBqkE.js";import"./Input-BOhHHxG9.js";import"./search-D1uGJSkA.js";import"./spin-BZBCzW67.js";import"./error-CKIF3yHX.js";import"./withOsdkMetrics-QG2B1sMI.js";import"./makeExternalStore-CdX6NCF6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
