import{j as i}from"./iframe-BGwIwWEh.js";import{O as p}from"./object-table-BbALfnP_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C4h19QMI.js";import"./preload-helper-DaJMqj_l.js";import"./Table-DV7qKTD_.js";import"./index-IqKqgeW3.js";import"./Dialog-60LtrDUL.js";import"./cross-CCJ4Erjw.js";import"./svgIconContainer-o0yAa7DN.js";import"./useBaseUiId-Bx0PVkvu.js";import"./InternalBackdrop-BceHrAMg.js";import"./composite-B2YG03DA.js";import"./index-CbmIHl_7.js";import"./index-Bo6Tdt1f.js";import"./index-DVuyxqwK.js";import"./useEventCallback-Bp5P_gp0.js";import"./SkeletonBar-Cicsnuhb.js";import"./LoadingCell-C7ev7AcJ.js";import"./ColumnConfigDialog-DYQQN3rc.js";import"./DraggableList-DZJjmD7T.js";import"./search-BpQNC6sv.js";import"./Input-D41ZdIt3.js";import"./useControlled-DZytncd1.js";import"./Button-BhV9_fzg.js";import"./small-cross-DWE0gQPB.js";import"./ActionButton-BX1OZitO.js";import"./Checkbox-CS9_YEgp.js";import"./useValueChanged-DzKjeiR-.js";import"./CollapsiblePanel-CuJlxl5T.js";import"./MultiColumnSortDialog-wpz2VgHC.js";import"./MenuTrigger-D1DOTVk2.js";import"./CompositeItem-D-aFyv1W.js";import"./ToolbarRootContext-BU6MqSEl.js";import"./getDisabledMountTransitionStyles-fuWoY_wo.js";import"./getPseudoElementBounds-DNrhWm0z.js";import"./chevron-down-Bm6Tj7Z6.js";import"./index-CTSacj2z.js";import"./error-D5T_pCuL.js";import"./BaseCbacBanner-Z8GzQNLS.js";import"./makeExternalStore-BRaFC0yj.js";import"./Tooltip-D5vtKM_y.js";import"./PopoverPopup-DYOwTnyz.js";import"./debounce-BJo4Ztyn.js";import"./useOsdkClient-B5DU8aU4.js";import"./tick-DNfwJYjk.js";import"./DropdownField-QuxoTji1.js";import"./isEqual-CJsdcYTp.js";import"./withOsdkMetrics-_pxO3ZE7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
