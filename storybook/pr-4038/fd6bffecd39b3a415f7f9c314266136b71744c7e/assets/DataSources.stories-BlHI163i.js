import{j as r}from"./iframe-voMwDu9I.js";import{O as b}from"./object-table-OMRvFpLe.js";import{E as i}from"./Employee-BAk2o20h.js";import{d as j,o as f,T as h}from"./objectTableStoryHelpers-BSbUFv-P.js";import{u as g}from"./useOsdkClient-DI51Lvg2.js";import"./preload-helper-YavkZJGd.js";import"./Table-HID_wtcK.js";import"./index-C1wISBvp.js";import"./Dialog-DGl--fRl.js";import"./cross-Dtmq2APj.js";import"./svgIconContainer-BNVNdA9N.js";import"./useBaseUiId-h_zaYehG.js";import"./InternalBackdrop-Bg2Pn1be.js";import"./composite-DmYT7ddW.js";import"./index-Y79_UCBN.js";import"./index-T2NqJhn0.js";import"./index-FmnW_XGx.js";import"./useEventCallback-Bimyknxr.js";import"./SkeletonBar-BfD5j53C.js";import"./LoadingCell-nTTc6Rbq.js";import"./ColumnConfigDialog-DTW2qmKN.js";import"./DraggableList-47qY9eDY.js";import"./search-C1v65Y4n.js";import"./Input-fxz47iVN.js";import"./useControlled-DQz2j8QF.js";import"./Button-BuGgzmKH.js";import"./small-cross-CkCJfZA3.js";import"./ActionButton-h7gq_W3b.js";import"./Checkbox-DIaxw-mP.js";import"./useValueChanged-B51ZhceZ.js";import"./CollapsiblePanel-DTchAleF.js";import"./MultiColumnSortDialog-CFkANgFh.js";import"./MenuTrigger-BFiK90mT.js";import"./CompositeItem-DkKn9mJ-.js";import"./ToolbarRootContext-D3Zw5lJf.js";import"./getDisabledMountTransitionStyles-O0gDbVYL.js";import"./getPseudoElementBounds-BGhK9mLg.js";import"./chevron-down-C58xTrh7.js";import"./index-BRox0REU.js";import"./error-Dh0kRUzk.js";import"./BaseCbacBanner-jRpkz4dK.js";import"./makeExternalStore-D4KyXXBP.js";import"./Tooltip-DdvT815d.js";import"./PopoverPopup-B7NNXEVs.js";import"./debounce-CLoU_st_.js";import"./tick-CQYdHD5k.js";import"./DropdownField-HtDR-_bI.js";import"./isEqual-DCso8IO6.js";import"./withOsdkMetrics-DiALcgCI.js";const u={type:"interface",apiName:"Worker"},{expect:n,within:d}=__STORYBOOK_MODULE_TEST__,je={...f,title:"Components/ObjectTable/Features/Data Sources"},a={args:{objectType:i,columnDefinitions:j},parameters:{docs:{source:{code:`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />`}}},render:t=>{const T=g()(i).where({jobProfile:"Marketing Manager"});return r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t,objectType:i,objectSet:T})})},play:async({canvasElement:t})=>{const e=d(t);await e.findAllByText("Marketing Manager"),await n(e.getAllByText("Marketing Manager").length).toBeGreaterThan(1),await n(e.queryByText("Content Manager")).not.toBeInTheDocument()}},o={args:{objectType:u},parameters:{docs:{description:{story:"Pass an interface type instead of an object type. The table shows the interface's properties (email, name, employeeNumber) and any object implementing the interface will be displayed."},source:{code:`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />`}}},render:t=>r.jsx("div",{className:"object-table-container",style:{height:"600px"},children:r.jsx(b,{...t})}),play:async({canvasElement:t})=>{const e=d(t);await e.findByText(h),await n(e.getByText("Name")).toBeInTheDocument(),await n(e.getByText("Email")).toBeInTheDocument()}};var c,s,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      source: {
        code: \`
const client = useOsdkClient();
const employeeObjectSet = client(Employee).where({
  jobProfile: "Marketing Manager",
});
return <ObjectTable objectType={Employee} objectSet={employeeObjectSet} />\`
      }
    }
  },
  render: args => {
    const client = useOsdkClient();
    const employeeObjectSet = client(Employee).where({
      jobProfile: "Marketing Manager"
    });
    return <div className="object-table-container" style={{
      height: "600px"
    }}>
        <ObjectTable {...args} objectType={Employee} objectSet={employeeObjectSet} />
      </div>;
  },
  // The object set is filtered to \`jobProfile: "Marketing Manager"\`
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Wait for the (MSW-mocked) rows to load.
    await canvas.findAllByText("Marketing Manager");
    await expect(canvas.getAllByText("Marketing Manager").length).toBeGreaterThan(1);
    await expect(canvas.queryByText("Content Manager")).not.toBeInTheDocument();
  }
}`,...(m=(s=a.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,l,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    objectType: WorkerInterface as unknown as typeof Employee
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an interface type instead of an object type. The table shows the interface's " + "properties (email, name, employeeNumber) and any object implementing the interface " + "will be displayed."
      },
      source: {
        code: \`import { WorkerInterface } from "./types/WorkerInterface";

<ObjectTable objectType={WorkerInterface} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // The interface exposes name/email/employeeNumber; objects implementing it
  // (Employees) render with those mapped properties (name ← fullName).
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Interface "name" maps to the Employee's fullName.
    await canvas.findByText(TARGET_DATA);

    // The interface's columns are shown by their display names.
    await expect(canvas.getByText("Name")).toBeInTheDocument();
    await expect(canvas.getByText("Email")).toBeInTheDocument();
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};const fe=["WithObjectSet","WithInterfaceType"];export{o as WithInterfaceType,a as WithObjectSet,fe as __namedExportsOrder,je as default};
