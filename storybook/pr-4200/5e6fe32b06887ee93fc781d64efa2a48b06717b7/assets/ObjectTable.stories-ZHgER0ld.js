import{j as i}from"./iframe-BIQDpA0w.js";import{O as p}from"./object-table-RXAbVnBZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dw-ayemD.js";import"./preload-helper-CAkujj7t.js";import"./Table-Ce68YxbR.js";import"./index-QJcQchwi.js";import"./Dialog-D3VIN7AC.js";import"./cross-BhokxWW9.js";import"./svgIconContainer-Beiwk1zG.js";import"./useBaseUiId-HWzj2ccw.js";import"./InternalBackdrop-DMwmGhme.js";import"./composite-DWMEotDY.js";import"./index-Il0_IPc9.js";import"./index-DPEDKbeA.js";import"./index-BIXocC3w.js";import"./useEventCallback-BzVAB-mp.js";import"./SkeletonBar-B43s3nN1.js";import"./LoadingCell-DPwqXjlB.js";import"./ColumnConfigDialog-DxlsVkfp.js";import"./DraggableList-B4lvsNU6.js";import"./search-BU70SvPR.js";import"./Input-C1BIZDwN.js";import"./useControlled-JCzKMRhN.js";import"./Button-CwWS2Nno.js";import"./small-cross-CBUOmFXX.js";import"./ActionButton-DMzTeECz.js";import"./Checkbox-CTBZlszI.js";import"./useValueChanged-C1ElPd55.js";import"./CollapsiblePanel-DHXJGM_8.js";import"./MultiColumnSortDialog-DiKXAdpQ.js";import"./MenuTrigger-BCcyAoA5.js";import"./CompositeItem-k0wax-H2.js";import"./ToolbarRootContext-Cd2qP7C_.js";import"./getDisabledMountTransitionStyles-DLEuvAo9.js";import"./getPseudoElementBounds-DI-soIk4.js";import"./chevron-down-C5in3kf4.js";import"./index-FeoDYKMl.js";import"./error-D2lGBY9x.js";import"./BaseCbacBanner-TNEe3l7I.js";import"./makeExternalStore-DY4la4Jo.js";import"./Tooltip-DtFYkYWu.js";import"./PopoverPopup-CbUhKq8w.js";import"./debounce-1gOgvEv_.js";import"./useOsdkClient-CTsijBB9.js";import"./tick-CECUkR10.js";import"./DropdownField-7skf6f3x.js";import"./isEqual-BO1Nngw8.js";import"./withOsdkMetrics-BMxdO0Ca.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
