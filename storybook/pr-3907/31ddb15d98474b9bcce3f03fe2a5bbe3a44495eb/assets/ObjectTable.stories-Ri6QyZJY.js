import{j as i}from"./iframe-CcTzUt4q.js";import{O as p}from"./object-table-B5mEs8na.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D9bphcYM.js";import"./preload-helper-DTHvyKL2.js";import"./Table-DgQH63iU.js";import"./index-B0L2Pz3U.js";import"./Dialog-BmK-QCMj.js";import"./cross-CX9TEYNs.js";import"./svgIconContainer-DT2XOI7O.js";import"./useBaseUiId-vUFCbP4O.js";import"./InternalBackdrop-LwozvRjF.js";import"./composite-D9XK8W5R.js";import"./index-Dn8qQBZ_.js";import"./index-Bo_ehpsT.js";import"./index-BIFOh3O8.js";import"./useEventCallback-BngVQc52.js";import"./SkeletonBar-P8lEjqKk.js";import"./LoadingCell-DyEWtc2c.js";import"./ColumnConfigDialog-DSI5UCP3.js";import"./DraggableList-kbk4Kq4T.js";import"./search-BaEk66pJ.js";import"./Input-BbwwJ3kI.js";import"./useControlled-CXU26uEu.js";import"./Button-Bhonpuif.js";import"./small-cross-Bi6fImtG.js";import"./ActionButton-38fDduAv.js";import"./Checkbox-DcPzVpFb.js";import"./useValueChanged-DiIlb2iV.js";import"./CollapsiblePanel-DtiDyN9v.js";import"./MultiColumnSortDialog-DpkiqiMy.js";import"./MenuTrigger-vvc96eLU.js";import"./CompositeItem-MWEwicQS.js";import"./ToolbarRootContext-C074rZoJ.js";import"./getDisabledMountTransitionStyles-DXxCwzEL.js";import"./getPseudoElementBounds-oYato3fO.js";import"./chevron-down-C2VHnW9O.js";import"./index-CtpHKrCG.js";import"./error-Dj7Fc47o.js";import"./BaseCbacBanner-CDFaIa-9.js";import"./makeExternalStore-BHMTu4YC.js";import"./Tooltip-DuBTlYLb.js";import"./PopoverPopup-CofoEXd7.js";import"./debounce-yBMZLkBq.js";import"./useOsdkClient-zEDt1fx6.js";import"./tick-DyThwVFn.js";import"./DropdownField-JbUzQxvd.js";import"./isEqual-BITCjXxY.js";import"./withOsdkMetrics-5Ex0_go8.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
