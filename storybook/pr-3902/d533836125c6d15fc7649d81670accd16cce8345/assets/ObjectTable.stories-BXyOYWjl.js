import{j as i}from"./iframe-HdL12gTW.js";import{O as p}from"./object-table-Dm2p3ksP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B46c8J8f.js";import"./preload-helper-DuPhqSoR.js";import"./Table-DM2mI30K.js";import"./index-BLRoaiA0.js";import"./Dialog-maDReMa_.js";import"./cross-DXB0ggN8.js";import"./svgIconContainer-B7UNNoek.js";import"./useBaseUiId-ekw91PLD.js";import"./InternalBackdrop-BzYwFOtS.js";import"./composite-DN4TbWMs.js";import"./index-BtcGM-tQ.js";import"./index-DHnE9wbz.js";import"./index-BnY5tXhK.js";import"./useEventCallback-DsocUe2O.js";import"./SkeletonBar-7Iz5xNHa.js";import"./LoadingCell-BktCs9cO.js";import"./ColumnConfigDialog-CptZU2bV.js";import"./DraggableList-BDuY8vCU.js";import"./search-LcQw2NsK.js";import"./Input-BmrCOBDc.js";import"./useControlled-m8IrfiDX.js";import"./Button-fEp34dTs.js";import"./small-cross-hkiI0RO2.js";import"./ActionButton-AfJiByN3.js";import"./Checkbox-DRKvpEu_.js";import"./useValueChanged-CUzoMdeB.js";import"./CollapsiblePanel-BEkD3v9B.js";import"./MultiColumnSortDialog-DyXAvFZp.js";import"./MenuTrigger-CPsb2KOa.js";import"./CompositeItem-CdqweP-g.js";import"./ToolbarRootContext-o0MDLjcb.js";import"./getDisabledMountTransitionStyles-B_rqla-j.js";import"./getPseudoElementBounds-CUJmWWSF.js";import"./chevron-down-DW1_9o68.js";import"./index-CYZ7Zb3G.js";import"./error-C0h-qjZV.js";import"./BaseCbacBanner-BsFqezX1.js";import"./makeExternalStore-CFSL0hnp.js";import"./Tooltip-COBWUS2T.js";import"./PopoverPopup-p-ySQVE6.js";import"./debounce-CxoOeoZ7.js";import"./useOsdkClient-BVXwSViH.js";import"./tick-BulVH2kt.js";import"./DropdownField-ub_2LB2G.js";import"./isEqual-BV43QIc9.js";import"./withOsdkMetrics-Bvqw_Q6i.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
