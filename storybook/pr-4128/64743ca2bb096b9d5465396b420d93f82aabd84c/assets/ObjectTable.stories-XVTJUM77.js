import{j as i}from"./iframe-ClMgtSuk.js";import{O as p}from"./object-table--l5P5fZV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DxiuPfh1.js";import"./preload-helper-DTt1WWTr.js";import"./Table-Bs1Mc4j4.js";import"./index-CldZE-Fz.js";import"./Dialog-B8YbOYMH.js";import"./cross-viQYDEND.js";import"./svgIconContainer-oOu9mbxW.js";import"./useBaseUiId-woEv5Hvl.js";import"./InternalBackdrop-lzq1-uho.js";import"./composite-AMpBTCaD.js";import"./index-BU0jcG4_.js";import"./index-Rnbyd2Wh.js";import"./index-Ct_fn0U-.js";import"./useEventCallback-Df1aTrS2.js";import"./SkeletonBar-ClzuP6Go.js";import"./LoadingCell-uwKDV78Q.js";import"./ColumnConfigDialog-LYkt6wr0.js";import"./DraggableList-DuEHNMRv.js";import"./search-COwJRDi0.js";import"./Input-BtIh3kKl.js";import"./useControlled-8r5NxEZn.js";import"./Button-BCu1jtHq.js";import"./small-cross-CqFS18i-.js";import"./ActionButton-DSjTpeTA.js";import"./Checkbox-ASKiaSYC.js";import"./useValueChanged-BUHPg38E.js";import"./CollapsiblePanel-CtkO9azS.js";import"./MultiColumnSortDialog-QlO6Azc5.js";import"./MenuTrigger-CZRm3cej.js";import"./CompositeItem-DEoo3ITM.js";import"./ToolbarRootContext-dH9njPoH.js";import"./getDisabledMountTransitionStyles-DS7SGJ-f.js";import"./getPseudoElementBounds-DAVljBL_.js";import"./chevron-down-DRfUqPRw.js";import"./index-Dlvw17dt.js";import"./error-D3qiwtEy.js";import"./BaseCbacBanner-CN_XmouS.js";import"./makeExternalStore-v6XUl8OF.js";import"./Tooltip-CsPWprPe.js";import"./PopoverPopup-C7ZCNFox.js";import"./debounce-DNxed3Zp.js";import"./useOsdkClient-DebYYw8a.js";import"./tick-BVkIDnpf.js";import"./DropdownField-C5-pHjL8.js";import"./isEqual-z0aK0gs6.js";import"./withOsdkMetrics-H7JHankc.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
