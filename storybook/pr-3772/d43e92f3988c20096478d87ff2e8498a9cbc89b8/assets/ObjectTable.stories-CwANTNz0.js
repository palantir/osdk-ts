import{j as i}from"./iframe-CUYHvNfN.js";import{O as p}from"./object-table-DrGBp4DX.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DhZcnt2T.js";import"./preload-helper-tFZfyB41.js";import"./Table-Ci_Ol0tX.js";import"./index-CZ6Ua3PK.js";import"./Dialog-uScMynOw.js";import"./cross-s4aUx31-.js";import"./svgIconContainer-IAPv6aZQ.js";import"./useBaseUiId-eg1Lg5JC.js";import"./InternalBackdrop-Cur2i6RC.js";import"./composite-DN1Fq3ZM.js";import"./index-BYkORrIW.js";import"./index-Y2zZPE2J.js";import"./index-ZjqTklcj.js";import"./useEventCallback-DyIer7gt.js";import"./SkeletonBar-DZPPGB8l.js";import"./LoadingCell-Zdm3xRwY.js";import"./ColumnConfigDialog-CKfvEO-s.js";import"./DraggableList-vUUsBjlu.js";import"./search-DPxb-PyW.js";import"./Input-DGyagt2e.js";import"./useControlled-CPWUvLNJ.js";import"./Button-BjUF2wxD.js";import"./small-cross-CUJfuqdj.js";import"./ActionButton-B7SOf25_.js";import"./Checkbox-B_FjLsKV.js";import"./useValueChanged-UoQ6tBed.js";import"./CollapsiblePanel-B8lwZmSu.js";import"./MultiColumnSortDialog-D5jORJfI.js";import"./MenuTrigger-gbiYyiHU.js";import"./CompositeItem-C1TWAJDR.js";import"./ToolbarRootContext-D9L-Ml2A.js";import"./getDisabledMountTransitionStyles-BLtyVkg2.js";import"./getPseudoElementBounds-CdcOai2P.js";import"./chevron-down-CUbAZ-_p.js";import"./index-DID_2L9u.js";import"./error-CVq7I-wU.js";import"./BaseCbacBanner-DRX8yyDx.js";import"./makeExternalStore-D3VLDVl3.js";import"./Tooltip-DaDQwg-t.js";import"./PopoverPopup-Bbqol7Np.js";import"./debounce-DC_Wzb4i.js";import"./useOsdkClient-BQEFDs2E.js";import"./tick-eEgrLbkE.js";import"./DropdownField-DZRbqgAH.js";import"./isEqual-V57JVfEj.js";import"./withOsdkMetrics-D-VDYdk6.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
