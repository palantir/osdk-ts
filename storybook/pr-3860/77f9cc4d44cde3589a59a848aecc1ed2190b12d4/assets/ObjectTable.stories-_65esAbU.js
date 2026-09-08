import{j as i}from"./iframe-DlM-48cS.js";import{O as p}from"./object-table-6UYhzY7J.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ChV6GmpJ.js";import"./preload-helper-DmLvY0Ro.js";import"./Table-DHNgN1mF.js";import"./index-DQySynAe.js";import"./Dialog-BMdGWId2.js";import"./cross-DwTMpwkP.js";import"./svgIconContainer-BSW0qWgw.js";import"./useBaseUiId-BL7ajxcr.js";import"./InternalBackdrop-g_U0vMMw.js";import"./composite-CCDJ76ow.js";import"./index-oiGtd9Nq.js";import"./index-DD03Ubzs.js";import"./index-BbcdD0et.js";import"./useEventCallback-C32mWVio.js";import"./SkeletonBar-Cxw_3ain.js";import"./LoadingCell-JC4LkPeL.js";import"./ColumnConfigDialog-lAlcW1DG.js";import"./DraggableList-BRnq7nnv.js";import"./search-CPnwrFbd.js";import"./Input-BgLmo8kc.js";import"./useControlled-Cds1c1L2.js";import"./Button-CS46bS-Y.js";import"./small-cross-ZWRWvs2M.js";import"./ActionButton-C_ljWeF0.js";import"./Checkbox-BAwY31E0.js";import"./useValueChanged-p3rsjtiE.js";import"./CollapsiblePanel-DaZOGvpp.js";import"./MultiColumnSortDialog-CLq9BdIb.js";import"./MenuTrigger-BmrmMcrE.js";import"./CompositeItem-DnzFCdD-.js";import"./ToolbarRootContext-DaIwolue.js";import"./getDisabledMountTransitionStyles-BKN0QXaR.js";import"./getPseudoElementBounds-DmT7azNk.js";import"./chevron-down-P2rFBgt2.js";import"./index-zmbIiHRb.js";import"./error-CpOA0Xju.js";import"./BaseCbacBanner-DY-b7WCK.js";import"./makeExternalStore-CFNSwXMM.js";import"./Tooltip-WnQo6xYr.js";import"./PopoverPopup-DSW4WQWE.js";import"./debounce-C3CDxvw2.js";import"./useOsdkClient-BufyZItZ.js";import"./tick-D1rTjIGT.js";import"./DropdownField-BWVVH9kG.js";import"./isEqual-CCq2LSSh.js";import"./withOsdkMetrics-D-ub6zdF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
