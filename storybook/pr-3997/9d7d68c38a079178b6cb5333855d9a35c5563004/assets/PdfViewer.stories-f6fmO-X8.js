import{j as r,M as s}from"./iframe-CA9OR36W.js";import{P as p}from"./pdf-viewer-DvXeFB4n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-GcyKWJ13.js";import"./preload-helper-Bon2kKhd.js";import"./PdfViewer-zg9is30N.js";import"./index-B68sXqkL.js";import"./BasePdfViewer-B4GzajN8.js";import"./BasePdfViewer.module.css-BphdRLb7.js";import"./PdfViewerAnnotationLayer-DIvcejvr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6g9EXVV.js";import"./PdfViewerOutlineSidebar-CC5piyAC.js";import"./PdfViewerSidebarHeader-Db6hgVaK.js";import"./useBaseUiId-BgUh3svF.js";import"./useControlled-DI90JDHo.js";import"./CompositeRoot-Bb0diLbS.js";import"./CompositeItem-DyzBw55k.js";import"./ToolbarRootContext-BVT0PB0Z.js";import"./composite-Bz-KrWYH.js";import"./svgIconContainer-CeElG9sP.js";import"./PdfViewerSearchBar-CNidr0me.js";import"./chevron-up-BnAp_kTX.js";import"./chevron-down-DnMJpivZ.js";import"./cross-BEXTKsVw.js";import"./PdfViewerSidebar-CuEf3R78.js";import"./index-B8DsW-Cw.js";import"./index-B8B9EgfF.js";import"./index-y3ZmFdkO.js";import"./PdfViewerToolbar-CYxUSK2G.js";import"./Button-CP1_IUal.js";import"./chevron-right-DHfP4iOE.js";import"./Input-CexGKOKO.js";import"./search-BMMtCvCc.js";import"./spin-BzIdUMn8.js";import"./error-COtQT1aa.js";import"./withOsdkMetrics-C5BDt541.js";import"./makeExternalStore-CEy1rwg3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
