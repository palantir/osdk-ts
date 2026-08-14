import{j as i}from"./iframe-BiqEJvqs.js";import{O as p}from"./object-table-ByWQTztt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C7_5x4E9.js";import"./preload-helper-CUf-Ejfa.js";import"./Table-uOy9OEp4.js";import"./index-UOIl6jYX.js";import"./Dialog-znhQ3llA.js";import"./cross-J4n8RB05.js";import"./svgIconContainer-DhtXEAG2.js";import"./useBaseUiId-BfW20ii0.js";import"./InternalBackdrop-BOKyOs02.js";import"./composite-69au3nWT.js";import"./index-BEI0Rcxq.js";import"./index-BphVNaCP.js";import"./index-Ofy5twcD.js";import"./useEventCallback-BoyYhoVd.js";import"./SkeletonBar-CwCAIMYA.js";import"./LoadingCell-DoCiwnlV.js";import"./ColumnConfigDialog-CqdbbkAv.js";import"./DraggableList-jX8MWklq.js";import"./search-BBjG8S0f.js";import"./Input-ED3AY7t3.js";import"./useControlled-KybfaMD9.js";import"./Button-BZ6TNGhX.js";import"./small-cross-heoPx4jP.js";import"./ActionButton-pj4u8-sG.js";import"./Checkbox-CIZgw43L.js";import"./useValueChanged-DsVYoZzQ.js";import"./CollapsiblePanel-CD-DCHTk.js";import"./MultiColumnSortDialog-DzNPYbFj.js";import"./MenuTrigger-Th6t6h5N.js";import"./CompositeItem-DGaDgjtW.js";import"./ToolbarRootContext-6CMk-K6X.js";import"./getDisabledMountTransitionStyles-ByNtjguw.js";import"./getPseudoElementBounds-DxvMtYMy.js";import"./chevron-down-CbDtZ0Pe.js";import"./index-BVNphcmg.js";import"./error-JdYnclCK.js";import"./BaseCbacBanner-BF0XBNK3.js";import"./makeExternalStore-CbsSZTon.js";import"./Tooltip-B170VilI.js";import"./PopoverPopup-DNDK4_dy.js";import"./debounce-CPfb-Wa5.js";import"./useOsdkClient-DgwEzoz8.js";import"./tick-amhhThgk.js";import"./DropdownField-IKKiRqSx.js";import"./isEqual-DfHcaT7k.js";import"./withOsdkMetrics-BJrjEamM.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
