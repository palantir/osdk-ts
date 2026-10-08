import{j as r,M as s}from"./iframe-B5lqcjqD.js";import{P as p}from"./pdf-viewer-tb7AEeX4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-REj75TIH.js";import"./preload-helper-CRQgFnVN.js";import"./PdfViewer-CTLlW2nk.js";import"./index-CRsh17Vx.js";import"./BasePdfViewer-qhfJYOQy.js";import"./BasePdfViewer.module.css-1AkUmyTl.js";import"./PdfViewerAnnotationLayer-DcpqK3rC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GzoB_s8I.js";import"./PdfViewerOutlineSidebar-zFDR257j.js";import"./PdfViewerSidebarHeader-uFzsqYSi.js";import"./useBaseUiId-oknajK1z.js";import"./useControlled-Dh0gZz2O.js";import"./CompositeRoot-Tv6CN_cV.js";import"./CompositeItem-DEsHBn0r.js";import"./ToolbarRootContext-LzdOjhLO.js";import"./composite-Cre9O_Y6.js";import"./svgIconContainer-D6KCVgJj.js";import"./PdfViewerSearchBar-DNm62eME.js";import"./chevron-up-C2Wpo1Ad.js";import"./chevron-down-BAMUeMPH.js";import"./cross-DHsl6guL.js";import"./PdfViewerSidebar-C-JsJt30.js";import"./index-DBPktzPX.js";import"./index-yNr1-X6F.js";import"./index-C8V2J7Cn.js";import"./PdfViewerToolbar-Zzil3SUu.js";import"./Button-BS6My4W_.js";import"./chevron-right-NYJDHXC8.js";import"./Input-CZpiyJ1w.js";import"./search-Be9RJwWO.js";import"./spin-BdWqRCwD.js";import"./error-hbt_Js5f.js";import"./withOsdkMetrics-J94G_2em.js";import"./makeExternalStore-D04mQ5d-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
