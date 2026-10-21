import{j as i}from"./iframe-CazyyGHD.js";import{O as p}from"./object-table-D2-bxDkP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-XceLMLRL.js";import"./preload-helper-MgT8dc0X.js";import"./Table-DL3rssEZ.js";import"./index-Bwh0Qzuq.js";import"./Dialog-BF26qTkP.js";import"./cross-Cm-jIUuV.js";import"./svgIconContainer-D-fln-_9.js";import"./useBaseUiId-_VheOjS_.js";import"./InternalBackdrop-B4za0H0s.js";import"./composite-eyAHIZy6.js";import"./index-oHFfHIzb.js";import"./index-CtTCUyk6.js";import"./index-B5m19dzZ.js";import"./useEventCallback-UNd6PIzw.js";import"./SkeletonBar-B_xaQIaw.js";import"./LoadingCell-C0HWwQql.js";import"./ColumnConfigDialog-bVzUBl6y.js";import"./DraggableList-C9jWvyiI.js";import"./search-CwjMn8PH.js";import"./Input-BqWLM-qJ.js";import"./useControlled-W6MY3ceN.js";import"./Button-ByiOliQr.js";import"./small-cross-DG5C9V4j.js";import"./ActionButton-CY0CRft6.js";import"./Checkbox-CU_5eAW2.js";import"./useValueChanged-DBJ5aULu.js";import"./CollapsiblePanel-Di7CgTfu.js";import"./MultiColumnSortDialog--ev1RyHU.js";import"./MenuTrigger-Bv0F8YkX.js";import"./CompositeItem-rCpLyuDw.js";import"./ToolbarRootContext-Dv2tMkap.js";import"./getDisabledMountTransitionStyles-mlYUDhO6.js";import"./getPseudoElementBounds-9TC7yV4Y.js";import"./chevron-down-C2D_MUNL.js";import"./index-k2L1SHEL.js";import"./error-0vET3H6E.js";import"./BaseCbacBanner-C_L56GIo.js";import"./makeExternalStore-CoBf-2QX.js";import"./Tooltip-IDqRDs0x.js";import"./PopoverPopup-Ctcy6mDh.js";import"./debounce-C5wZ6LH3.js";import"./useOsdkClient-D82r7lVV.js";import"./tick-BlG7e-el.js";import"./DropdownField-C5gHzoJd.js";import"./isEqual-BrBpXSU5.js";import"./withOsdkMetrics-C07As7Qh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
