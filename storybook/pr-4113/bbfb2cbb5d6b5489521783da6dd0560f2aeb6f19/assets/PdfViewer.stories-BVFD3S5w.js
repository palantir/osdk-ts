import{j as r,M as s}from"./iframe-zPv4Qzqd.js";import{P as p}from"./pdf-viewer-BehnnYsb.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vMtsgNP6.js";import"./preload-helper-PJxV9mQF.js";import"./PdfViewer-DXBtQLYa.js";import"./index-CBKHTxLZ.js";import"./BasePdfViewer-CfAsQTWJ.js";import"./BasePdfViewer.module.css-C5W_vXdS.js";import"./PdfViewerAnnotationLayer-ulPDHDq4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ch2QbRSG.js";import"./PdfViewerOutlineSidebar-DQ7TyYpi.js";import"./PdfViewerSidebarHeader-CqMyM5Pl.js";import"./useBaseUiId-DVjOyWmw.js";import"./useControlled-0ViRdTwH.js";import"./CompositeRoot-BfSNPEGA.js";import"./CompositeItem-CdWRe_DK.js";import"./ToolbarRootContext-CKYx1umj.js";import"./composite-B2SBl57g.js";import"./svgIconContainer-vb3o1rNS.js";import"./PdfViewerSearchBar-DEIYkn_H.js";import"./chevron-up-CFXIk0Il.js";import"./chevron-down-Bq07BQjw.js";import"./cross--dxagHok.js";import"./PdfViewerSidebar-CFYr5LO-.js";import"./index-BFqEQ3NN.js";import"./index-LSfGN98D.js";import"./index-Dqw7fhLs.js";import"./PdfViewerToolbar-D5rsPTJ6.js";import"./Button-Bpg2U0NI.js";import"./chevron-right-Cfl2mPbj.js";import"./Input-BZ1hKq3S.js";import"./search-CQlxqsQe.js";import"./spin-DcXBhkmL.js";import"./error-DWSHpljN.js";import"./withOsdkMetrics-DD1axzdT.js";import"./makeExternalStore-Bpbj6CnC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
