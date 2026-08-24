import{j as i}from"./iframe-Dux2Qj3g.js";import{O as p}from"./object-table-D1_EyN1b.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1mnOXwRv.js";import"./preload-helper-Bmm2hojr.js";import"./Table-URVL5IF2.js";import"./index-DYXOz2KI.js";import"./Dialog-D3t5BU2x.js";import"./cross-BN8ne7bQ.js";import"./svgIconContainer-BifzH97M.js";import"./useBaseUiId-D_xWZtaR.js";import"./InternalBackdrop-C19pElAH.js";import"./composite-ExUcYNpU.js";import"./index-8ZfSX0Ah.js";import"./index-ChzWjjSE.js";import"./index-BgSd39KN.js";import"./useEventCallback-BRs2rNZa.js";import"./SkeletonBar-DjvHpYhU.js";import"./LoadingCell-Bu6ye8hm.js";import"./ColumnConfigDialog-Dqru0J9z.js";import"./DraggableList-BooAKe5B.js";import"./search-CZ5yXAIw.js";import"./Input-CmbycQCS.js";import"./useControlled-v5c73Hs6.js";import"./Button-DqQZXePg.js";import"./small-cross-DO46gXNN.js";import"./ActionButton-BV9Vc2OE.js";import"./Checkbox-B-0McJWo.js";import"./useValueChanged-BvHTePul.js";import"./CollapsiblePanel-DKqzGBfA.js";import"./MultiColumnSortDialog-DPe5lHO5.js";import"./MenuTrigger-DasyMhWF.js";import"./CompositeItem-0lWnRnJ1.js";import"./ToolbarRootContext-BLtnGACK.js";import"./getDisabledMountTransitionStyles-R5nWDe4s.js";import"./getPseudoElementBounds-CRIgf0ZE.js";import"./chevron-down-MKh3Y1PC.js";import"./index-CTN-iZVf.js";import"./error-Dn9sEgKj.js";import"./BaseCbacBanner-BbT4UFKk.js";import"./makeExternalStore-BDAriLIM.js";import"./Tooltip-RggE_7g1.js";import"./PopoverPopup-0sML79DS.js";import"./debounce-Bz72JVsr.js";import"./useOsdkClient-DANBmGn-.js";import"./tick-Dx1-rbQT.js";import"./DropdownField-Du4rKZP5.js";import"./useDebouncedCallback-lmpQIr4o.js";import"./withOsdkMetrics-BlPb20x4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
