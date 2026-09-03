import{j as r,M as s}from"./iframe-CK5D4Vrc.js";import{P as p}from"./pdf-viewer-ConPGjcw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CiEqVVHH.js";import"./preload-helper--rfFAAg9.js";import"./PdfViewer-EuW721Sd.js";import"./index-DTCKW3FC.js";import"./BasePdfViewer-DSqWHLTJ.js";import"./BasePdfViewer.module.css-HuolsHjq.js";import"./PdfViewerAnnotationLayer-CRDernXj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-b4C_XbNg.js";import"./PdfViewerOutlineSidebar-DeivcPmy.js";import"./PdfViewerSidebarHeader-BD9yDpH9.js";import"./useBaseUiId-ChiwJHU0.js";import"./useControlled-EjNIu-gh.js";import"./CompositeRoot-DrRPcyji.js";import"./CompositeItem-GR3Crn-r.js";import"./ToolbarRootContext-fQ8fBJNz.js";import"./composite-EY5o54z0.js";import"./svgIconContainer-B-9rvjfq.js";import"./PdfViewerSearchBar-C0kccsrA.js";import"./chevron-up-CuroaEn3.js";import"./chevron-down-Bfelo19f.js";import"./cross-DqRqsA-Z.js";import"./PdfViewerSidebar-DTQGDi_7.js";import"./index-BRqooFTa.js";import"./index-B0VFCsPS.js";import"./index-Bf8FWlfU.js";import"./PdfViewerToolbar-CERJEQJm.js";import"./Button-QI0ogqOo.js";import"./chevron-right-CXXwHem3.js";import"./Input-BkbLF__D.js";import"./search-CQswBcjf.js";import"./spin-CVDiDw2E.js";import"./error-BTGDM8SC.js";import"./withOsdkMetrics-BNMaUBqJ.js";import"./makeExternalStore-BGHIEiJx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
