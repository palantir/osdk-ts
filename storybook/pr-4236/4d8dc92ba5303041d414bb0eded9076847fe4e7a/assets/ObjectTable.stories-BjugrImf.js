import{j as i}from"./iframe-sYP-l0_a.js";import{O as p}from"./object-table-iZFECS6W.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dd5_GLYW.js";import"./preload-helper-IUxRucnJ.js";import"./Table-BUHzV8yp.js";import"./index-BQi0o8Ch.js";import"./Dialog-BFHYyj12.js";import"./cross-Bm2pwBEc.js";import"./svgIconContainer-BEJydEi7.js";import"./useBaseUiId-Btvm4iEK.js";import"./InternalBackdrop-DijQJX9k.js";import"./composite-C-aQf2ph.js";import"./index-C0H-vXi6.js";import"./index-mlL1YxFR.js";import"./index-xLQRXt-V.js";import"./useEventCallback-D6BPXVKE.js";import"./SkeletonBar-CVV4GeGn.js";import"./LoadingCell-CLgAP5VW.js";import"./ColumnConfigDialog-S0lCM_Th.js";import"./DraggableList-GiPYuzSS.js";import"./search-DLv6CrwK.js";import"./Input-CSh4Ffdb.js";import"./useControlled-BPCLqxL9.js";import"./Button-B9jbca7B.js";import"./small-cross-BNetlOJK.js";import"./ActionButton-Df-gBOsA.js";import"./Checkbox-CnEZTfwt.js";import"./useValueChanged-g9YxF3UY.js";import"./CollapsiblePanel-uVWOXX9u.js";import"./MultiColumnSortDialog-BMqK2Mpk.js";import"./MenuTrigger-Qyu7kn7x.js";import"./CompositeItem-7yi4DVr9.js";import"./ToolbarRootContext-BoQIBGO1.js";import"./getDisabledMountTransitionStyles-BeyRbu5X.js";import"./getPseudoElementBounds-Bi5n7pX-.js";import"./chevron-down-BmV5GZMn.js";import"./index-00-MRRTX.js";import"./error-DO2C4OtK.js";import"./BaseCbacBanner-kLI1EgfT.js";import"./makeExternalStore-CFZXdEl0.js";import"./Tooltip-C6Jo1h3u.js";import"./PopoverPopup-0_cMUPX-.js";import"./debounce-DXz0GdeZ.js";import"./useOsdkClient-D0mwHTqt.js";import"./tick-X4dvwp5-.js";import"./DropdownField-YTr0JAyw.js";import"./isEqual-Bf2UhZVY.js";import"./withOsdkMetrics-2D2ceNeO.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
