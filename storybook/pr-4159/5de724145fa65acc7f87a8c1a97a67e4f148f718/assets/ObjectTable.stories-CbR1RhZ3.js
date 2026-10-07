import{j as i}from"./iframe-BkonaQ0V.js";import{O as p}from"./object-table-DQRry3AB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CgHAq6xX.js";import"./preload-helper-wgqeRAml.js";import"./Table-B7e1ZhoA.js";import"./index-CygiEJb6.js";import"./Dialog-DBnPtZV1.js";import"./cross-CkDGtOaH.js";import"./svgIconContainer-B_Cau1X9.js";import"./useBaseUiId-DnbkQC4-.js";import"./InternalBackdrop-Cih9MBeb.js";import"./composite-CFHemZO9.js";import"./index-CBL-z8ep.js";import"./index-ct3tIu0S.js";import"./index-CpL6Ija4.js";import"./useEventCallback-B9xx7Ssa.js";import"./SkeletonBar-BnNg27Cz.js";import"./LoadingCell-Dhy8klPf.js";import"./ColumnConfigDialog-D9SM7fc_.js";import"./DraggableList-CYtRZi8h.js";import"./search-J0YUGWpH.js";import"./Input-BP09pCNP.js";import"./useControlled-DJSj5exZ.js";import"./Button-uS_BewGO.js";import"./small-cross-Ds0-Yg5S.js";import"./ActionButton-CMP6VOQi.js";import"./Checkbox-BtZ_gIR0.js";import"./useValueChanged-BRpmqW3_.js";import"./CollapsiblePanel-r9bycGf3.js";import"./MultiColumnSortDialog-B9pEUzuv.js";import"./MenuTrigger-4ZXDXskl.js";import"./CompositeItem-Bl9Mb02l.js";import"./ToolbarRootContext-C3x2oEG2.js";import"./getDisabledMountTransitionStyles-CaY-5WcQ.js";import"./getPseudoElementBounds-CJ3hgKhp.js";import"./chevron-down-BvYaF6aU.js";import"./index-CcaHmPI_.js";import"./error-DnbjG5aU.js";import"./BaseCbacBanner-BiMj7cVS.js";import"./makeExternalStore-CxsJ8F0x.js";import"./Tooltip-BUWMYkhF.js";import"./PopoverPopup-Ck4dFzY0.js";import"./debounce-DpSqLCDy.js";import"./useOsdkClient-BSF82BLH.js";import"./tick-DKukE1zV.js";import"./DropdownField-BXi0zmhU.js";import"./isEqual-CJO4zUtQ.js";import"./withOsdkMetrics-DYHyomoB.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
