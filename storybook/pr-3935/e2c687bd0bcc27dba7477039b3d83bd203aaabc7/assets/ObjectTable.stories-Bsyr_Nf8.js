import{j as i}from"./iframe-XrofcpbD.js";import{O as p}from"./object-table-CQUtluaU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C3o2Uboy.js";import"./preload-helper-4aKSNE4Z.js";import"./Table-PyHbwIL1.js";import"./index-BpIQk31K.js";import"./Dialog-CK0ThOMi.js";import"./cross-xvFBNCq9.js";import"./svgIconContainer-BRYxzENj.js";import"./useBaseUiId-Pjnp1WCR.js";import"./InternalBackdrop-CS9GDJ0k.js";import"./composite-CVP2vWQr.js";import"./index-YIz0O6eI.js";import"./index-BiB6mgaY.js";import"./index-COS5oq6K.js";import"./useEventCallback-D-w8hKF8.js";import"./SkeletonBar-wEBtoQJI.js";import"./LoadingCell-7gmLP_EL.js";import"./ColumnConfigDialog-CLkIWZFy.js";import"./DraggableList-2ENQuMLR.js";import"./search-CpQHwDsV.js";import"./Input-DP0HZuep.js";import"./useControlled-DZJgL9vi.js";import"./Button-D93TIJdR.js";import"./small-cross-D5AmJrUy.js";import"./ActionButton-CvgtCG2W.js";import"./Checkbox-KLRIxs55.js";import"./useValueChanged-DMuoZqzV.js";import"./CollapsiblePanel-CrlLnisy.js";import"./MultiColumnSortDialog-BTDzGz_3.js";import"./MenuTrigger-B-_LgIM3.js";import"./CompositeItem-BEvI0D6E.js";import"./ToolbarRootContext-AhwQqi4V.js";import"./getDisabledMountTransitionStyles-BIi-_6hn.js";import"./getPseudoElementBounds-CMVTFGwo.js";import"./chevron-down-CD2YsHKM.js";import"./index-UBL3yvSp.js";import"./error-CCJEPyJx.js";import"./BaseCbacBanner-DLUQs4q_.js";import"./makeExternalStore-YYVkatD5.js";import"./Tooltip-Co0onlWy.js";import"./PopoverPopup-BlCB73eB.js";import"./debounce-DZml1LHx.js";import"./useOsdkClient-BWNNp0nW.js";import"./tick-CT2U49RP.js";import"./DropdownField-6GQjb6-H.js";import"./isEqual-ByMEfs2L.js";import"./withOsdkMetrics-BHkoZ0sq.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
