import{j as i}from"./iframe-DKYmESdc.js";import{O as p}from"./object-table-BzdfRhLC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CWMR6Jev.js";import"./preload-helper-D5LE5Idy.js";import"./Table-CZvg9-PS.js";import"./index-DiIAgi_U.js";import"./Dialog-DJCFoWTr.js";import"./cross-yKYTlWK6.js";import"./svgIconContainer-D8ijfEF1.js";import"./useBaseUiId-CdKuMMMb.js";import"./InternalBackdrop-D2B5n5hm.js";import"./composite-DHljAWKo.js";import"./index-Dh-P4ImN.js";import"./index-BEPjmphW.js";import"./index-C6gaZbLL.js";import"./useEventCallback-ClNFTONN.js";import"./SkeletonBar-B4aoYFGC.js";import"./LoadingCell-BA8GKKnf.js";import"./ColumnConfigDialog-B9GK9pIT.js";import"./DraggableList-ChqmULcQ.js";import"./search-B7mMrQlf.js";import"./Input-BxCkIabd.js";import"./useControlled-B4q39qZO.js";import"./Button-DgkmSaF3.js";import"./small-cross-CgLsC0gq.js";import"./ActionButton-BU5G-FGV.js";import"./Checkbox-EdSHZ3e6.js";import"./useValueChanged-UpP8-F1K.js";import"./CollapsiblePanel-rz3tKFdi.js";import"./MultiColumnSortDialog-DVsWttF1.js";import"./MenuTrigger-Cn617Mmm.js";import"./CompositeItem-DhBadV4y.js";import"./ToolbarRootContext-CrwTeoix.js";import"./getDisabledMountTransitionStyles-C2zNLNsa.js";import"./getPseudoElementBounds-CQqlgHcK.js";import"./chevron-down-D1R0n3KO.js";import"./index-CC7Zqv6C.js";import"./error-DPhIreuO.js";import"./BaseCbacBanner-CIktjUa1.js";import"./makeExternalStore-DpXPZl7r.js";import"./Tooltip-CyVgxnxr.js";import"./PopoverPopup-18xMmYUE.js";import"./debounce-DJdertEZ.js";import"./useOsdkClient-D7r4vk7f.js";import"./tick-CfTVfx8m.js";import"./DropdownField-DdjBmbfl.js";import"./isEqual-BukSJ3gf.js";import"./withOsdkMetrics-WG4CGMhx.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
