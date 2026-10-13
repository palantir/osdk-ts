import{j as i}from"./iframe-CBRNe0Dg.js";import{O as p}from"./object-table-BAGMdVtf.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DiKPibO6.js";import"./preload-helper-DJi7bbUl.js";import"./Table-B6sIuEtI.js";import"./index-BSRDLVEM.js";import"./Dialog-7DhHMlhh.js";import"./cross-DAsoWhzO.js";import"./svgIconContainer-BBVFHmV2.js";import"./useBaseUiId-D_HMOfD5.js";import"./InternalBackdrop-KEsOgzDz.js";import"./composite-BuD5KbGT.js";import"./index-DyLUaQFL.js";import"./index-BL4-PH8Q.js";import"./index-BiTypZqh.js";import"./useEventCallback-D4SpnnAU.js";import"./SkeletonBar-olnbAch4.js";import"./LoadingCell-Bbdx2Tuz.js";import"./ColumnConfigDialog-DfhZEQxL.js";import"./DraggableList-CkYWh6sa.js";import"./search-vRSw7SVB.js";import"./Input-DE2kadHj.js";import"./useControlled-DvLu4sEA.js";import"./Button-BwFbzqgO.js";import"./small-cross-PLNqiuOL.js";import"./ActionButton-DKIq8eOB.js";import"./Checkbox-C94siIa5.js";import"./useValueChanged-CFTTzEg_.js";import"./CollapsiblePanel-B4faU3Bh.js";import"./MultiColumnSortDialog-DsDFOMHG.js";import"./MenuTrigger-DVdt-2IF.js";import"./CompositeItem-Di3J0NmB.js";import"./ToolbarRootContext-DULN64W3.js";import"./getDisabledMountTransitionStyles-BaZsOBxZ.js";import"./getPseudoElementBounds-B95LpML9.js";import"./chevron-down-B0oPEK-O.js";import"./index-BZ5chbDc.js";import"./error-BdLYnG0k.js";import"./BaseCbacBanner-r6MsogDY.js";import"./makeExternalStore-BNcpWlh9.js";import"./Tooltip--QZaQjFA.js";import"./PopoverPopup-09yaNLgW.js";import"./debounce-B56v9xFw.js";import"./useOsdkClient-AKuj0MEq.js";import"./tick-B2SeXnIY.js";import"./DropdownField-BFeUwC4l.js";import"./isEqual-tg2tvR8k.js";import"./withOsdkMetrics-BL4vab8_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
