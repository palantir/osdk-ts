import{j as r,M as s}from"./iframe-DTTjhdqf.js";import{P as p}from"./pdf-viewer-C5NLCELr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B314adRD.js";import"./preload-helper-DLuwwicB.js";import"./PdfViewer-BRtZ212E.js";import"./index-C_u0ZD76.js";import"./BasePdfViewer-jUvFnpOR.js";import"./BasePdfViewer.module.css-rUrmlmw9.js";import"./PdfViewerAnnotationLayer-Dhwrcb_0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNbnv1ln.js";import"./PdfViewerOutlineSidebar-ELSJ21tQ.js";import"./PdfViewerSidebarHeader-FmkGg-FW.js";import"./useBaseUiId-DAXCLwKK.js";import"./useControlled-DnFxapfF.js";import"./CompositeRoot-C8ZgTfhF.js";import"./CompositeItem-NevsqKCs.js";import"./ToolbarRootContext-Dcs6ty2M.js";import"./composite-DmV5qlv-.js";import"./svgIconContainer-BQTxrAHk.js";import"./PdfViewerSearchBar-BQQS97E4.js";import"./chevron-up-Bgd0bC6g.js";import"./chevron-down-DMQn8YNS.js";import"./cross-Biqxkz0W.js";import"./PdfViewerSidebar-BRh9uSsT.js";import"./index-cabLRwho.js";import"./index-BF1qraTR.js";import"./index-BZqSoOPp.js";import"./PdfViewerToolbar-Bhsbcv9h.js";import"./Button-CVsxv-I0.js";import"./chevron-right-BqJpObXT.js";import"./Input-DIq0Mf7R.js";import"./search-DqqzOunc.js";import"./spin-CRrAljnP.js";import"./error-9LOJa28H.js";import"./withOsdkMetrics-BVdsAVYy.js";import"./makeExternalStore-FJoYAOnh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
