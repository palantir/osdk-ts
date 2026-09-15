import{j as i}from"./iframe-Ch3dDQ73.js";import{O as p}from"./object-table-BpQCrLuw.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BkZbZgoj.js";import"./preload-helper-Dt5E_MQT.js";import"./Table-bPK54u9G.js";import"./index-BPSQkvlq.js";import"./Dialog-Du7U6i8w.js";import"./cross-BwedcRbE.js";import"./svgIconContainer-DsDanRUJ.js";import"./useBaseUiId-BuMyPGEd.js";import"./InternalBackdrop-DnrpHvoH.js";import"./composite-79LVsM0Q.js";import"./index-CJDfC3kZ.js";import"./index-BcAKrfT8.js";import"./index-DvNjnhsf.js";import"./useEventCallback-DzSeWiWA.js";import"./SkeletonBar-DU3E93Ca.js";import"./LoadingCell-CJX5iyhd.js";import"./ColumnConfigDialog-Bk603sCJ.js";import"./DraggableList-DPPyeJcQ.js";import"./search-Dq24XcYb.js";import"./Input-CyFa-sRf.js";import"./useControlled-Uo30Ht4a.js";import"./Button-BdllNL1h.js";import"./small-cross-COqMeQyn.js";import"./ActionButton-Bq5mCozF.js";import"./Checkbox-Dkxayd1k.js";import"./useValueChanged-D8drAKML.js";import"./CollapsiblePanel-C-zvQjZV.js";import"./MultiColumnSortDialog-DdFD_LY1.js";import"./MenuTrigger-BW8bySv0.js";import"./CompositeItem-yRGsM-I0.js";import"./ToolbarRootContext-BL4WdLNX.js";import"./getDisabledMountTransitionStyles-BnreKSZO.js";import"./getPseudoElementBounds-aMC_66Nd.js";import"./chevron-down-DtSbmNQ9.js";import"./index-BVJ9nyHd.js";import"./error-C6gNYlkP.js";import"./BaseCbacBanner-DMvkn6aU.js";import"./makeExternalStore-9OgJXISf.js";import"./Tooltip-BdV_g6Rg.js";import"./PopoverPopup-CDUt_0V_.js";import"./debounce-Bj0CUW6Z.js";import"./useOsdkClient-BEOsOU0g.js";import"./tick-CdmQNoN2.js";import"./DropdownField-BwlReH7s.js";import"./isEqual-D4DZ3_5E.js";import"./withOsdkMetrics-D3LSYI9p.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
