import{j as r,M as s}from"./iframe-BkcR1iue.js";import{P as p}from"./pdf-viewer-CbwrSpjD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-De02_yIs.js";import"./preload-helper-DrQC6sAs.js";import"./PdfViewer-B928MxQr.js";import"./index-C48hokBn.js";import"./BasePdfViewer-B4pcODCD.js";import"./BasePdfViewer.module.css-BGGT4pSW.js";import"./PdfViewerAnnotationLayer-Cszl5gFB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CsIro66t.js";import"./PdfViewerOutlineSidebar-Bz94tAdO.js";import"./PdfViewerSidebarHeader-eGQnctk5.js";import"./useBaseUiId-CMez3yYq.js";import"./useControlled-DQuU9HTi.js";import"./CompositeRoot-BRrzckH_.js";import"./CompositeItem-D6GgTBoR.js";import"./ToolbarRootContext--E-pClz6.js";import"./composite-BvN8B2j0.js";import"./svgIconContainer-5EXbYaZG.js";import"./PdfViewerSearchBar-BP-l4zba.js";import"./chevron-up-DBThE4il.js";import"./chevron-down-B8DDqxwj.js";import"./cross-Dq5JHURf.js";import"./PdfViewerSidebar-Cv9EDS8q.js";import"./index-oeK8lm2i.js";import"./index-BcdwcPhB.js";import"./index-B7w41dnZ.js";import"./PdfViewerToolbar-CoGp2P8a.js";import"./Button-B40tdNrN.js";import"./chevron-right-D72kq3mX.js";import"./Input-7EUJZBSZ.js";import"./search--B6bPp9Q.js";import"./spin-AqcY_lou.js";import"./error-Dqr8KpcY.js";import"./withOsdkMetrics-DHpidme4.js";import"./makeExternalStore-DjRLK8zO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
