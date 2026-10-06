import{j as i}from"./iframe-Cd5diGA4.js";import{O as p}from"./object-table-DK-Vk0K8.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CuXsFdVB.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BVhb1VDS.js";import"./index-CzM4WAmt.js";import"./Dialog-SqqO26FL.js";import"./cross-ButwHlHJ.js";import"./svgIconContainer-DaB2_UOp.js";import"./useBaseUiId-visX6u-_.js";import"./InternalBackdrop-BH_ajHFZ.js";import"./composite-CvjMA8y2.js";import"./index-DAgKjLrT.js";import"./index-Y3NM_UBm.js";import"./index-B-PHEzSN.js";import"./useEventCallback-gcr9TNzx.js";import"./SkeletonBar-BLoGGC6L.js";import"./LoadingCell-DFlWXzkK.js";import"./ColumnConfigDialog-COxdtVMj.js";import"./DraggableList-B-3f11gE.js";import"./search-Dn_Ud8yw.js";import"./Input-BTdSlwyz.js";import"./useControlled-BM2rkvMt.js";import"./Button-CqfMgiGG.js";import"./small-cross-D8C9SWIq.js";import"./ActionButton-D1mJzJ86.js";import"./Checkbox-DH-ovV7p.js";import"./useValueChanged-BwYeNo1h.js";import"./CollapsiblePanel-Df68r8NJ.js";import"./MultiColumnSortDialog-moChkA17.js";import"./MenuTrigger-Cx_EZ4Jt.js";import"./CompositeItem-Bud6cqZd.js";import"./ToolbarRootContext-BsB0g93g.js";import"./getDisabledMountTransitionStyles-BvKshnXk.js";import"./getPseudoElementBounds-BJZWWLa0.js";import"./chevron-down-BxrXgsF8.js";import"./index-BqTfBsD7.js";import"./error-BudjlwPt.js";import"./BaseCbacBanner-CzbfxawI.js";import"./makeExternalStore-CFuKSi4I.js";import"./Tooltip-2UDphehv.js";import"./PopoverPopup-CkIT-hq_.js";import"./debounce-DpmfyqFC.js";import"./useOsdkClient-DNLZbnGw.js";import"./tick-B8kZrpYx.js";import"./DropdownField-Bg6DPx3N.js";import"./isEqual-BA5U0Dg4.js";import"./withOsdkMetrics-C_0Aw4CV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
