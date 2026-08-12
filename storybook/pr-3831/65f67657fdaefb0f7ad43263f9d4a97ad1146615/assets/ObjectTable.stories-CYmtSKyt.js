import{j as i}from"./iframe-ohJVZKOW.js";import{O as p}from"./object-table-BQf4gSPe.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CShWgETT.js";import"./preload-helper-C1R0P_VY.js";import"./Table-DHhtMo4h.js";import"./index-C4DoG2f-.js";import"./Dialog-hp52T4ga.js";import"./cross-Bfip_FoZ.js";import"./svgIconContainer-DzjVEjGe.js";import"./useBaseUiId-LmdhvU1h.js";import"./InternalBackdrop-CGIgSFQ4.js";import"./composite-DQx9kvkN.js";import"./index-BnE2PvA_.js";import"./index-DW2zHBPJ.js";import"./index-BBGAx8RY.js";import"./useEventCallback-zsHSeYCI.js";import"./SkeletonBar-gFkpuj06.js";import"./LoadingCell-ChUx_zUn.js";import"./ColumnConfigDialog-Du02Nzwe.js";import"./DraggableList-Dc-sxHhv.js";import"./search-BG9SxdnF.js";import"./Input-Drh9HzXR.js";import"./useControlled-ClfC2jv8.js";import"./isEqual-BJL22rN0.js";import"./isObject-IFnXNPKD.js";import"./Button-CsxMEHMa.js";import"./ActionButton-6tpCH2WS.js";import"./Checkbox-BInzSkBA.js";import"./useValueChanged-DsZbiuI8.js";import"./CollapsiblePanel-CDuCRfTD.js";import"./MultiColumnSortDialog--rdOM0mO.js";import"./MenuTrigger-Cmh-HMwy.js";import"./CompositeItem-DRccTLFK.js";import"./ToolbarRootContext-BclOg9vJ.js";import"./getDisabledMountTransitionStyles-B_LH_dlj.js";import"./getPseudoElementBounds-CI1x8v8B.js";import"./chevron-down-B-OZmB_2.js";import"./index-Bdc5AnYd.js";import"./error-BoH5SAwj.js";import"./BaseCbacBanner-iflnoL7j.js";import"./makeExternalStore-C5RAotff.js";import"./Tooltip-BJh6oCPg.js";import"./PopoverPopup-Cw_qMkyL.js";import"./toNumber-g7Jojpxk.js";import"./useOsdkClient-BCwpDIbF.js";import"./tick-QFxu5a3T.js";import"./DropdownField-BkXQZJoe.js";import"./withOsdkMetrics-CxazBpkT.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
