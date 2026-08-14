import{j as i}from"./iframe-Dgz81_4K.js";import{O as p}from"./object-table-XVXvflBu.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C7_-UiVW.js";import"./preload-helper-BGuNlUqA.js";import"./Table-C06ByMGO.js";import"./index-F2L_OuM-.js";import"./Dialog-CDp-Veg8.js";import"./cross-HWG3bUDk.js";import"./svgIconContainer-25pdXJKu.js";import"./useBaseUiId-BncAuZS9.js";import"./InternalBackdrop-BPQNGpAG.js";import"./composite-CBrybvSL.js";import"./index-CiBmfd_G.js";import"./index-47H69AQZ.js";import"./index-Ds6p27lf.js";import"./useEventCallback-BnOv6IzA.js";import"./SkeletonBar-VEjFGD4t.js";import"./LoadingCell-K6JSKvyl.js";import"./ColumnConfigDialog-pjMNDJdp.js";import"./DraggableList-D7gqpHuT.js";import"./search-z0PitH45.js";import"./Input-Bd0_Le58.js";import"./useControlled-pvz7JI6x.js";import"./Button-Bs7uQYUi.js";import"./small-cross-B70ETe3L.js";import"./ActionButton-CIeAXwRJ.js";import"./Checkbox-CeDeYt1s.js";import"./useValueChanged-CuNdENEf.js";import"./CollapsiblePanel-C6cIco7o.js";import"./MultiColumnSortDialog-cIk4biXZ.js";import"./MenuTrigger-6x1oizp8.js";import"./CompositeItem-Do6kqd5-.js";import"./ToolbarRootContext-mBIzMDya.js";import"./getDisabledMountTransitionStyles-O1nph41t.js";import"./getPseudoElementBounds-F0fN0QBG.js";import"./chevron-down-Cgs_d-_t.js";import"./index-htBElXvT.js";import"./error-nIlnw04t.js";import"./BaseCbacBanner-DMJ_hAQ0.js";import"./makeExternalStore-B9Noz3DE.js";import"./Tooltip-AKcFu8Jq.js";import"./PopoverPopup-dwsqpii7.js";import"./debounce-D5ysvOol.js";import"./useOsdkClient-CFPwPtkE.js";import"./tick-GG7597jc.js";import"./DropdownField-rCUt7nOE.js";import"./isEqual-UVul4Goj.js";import"./withOsdkMetrics-tYv3puyU.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
