import{j as i}from"./iframe-2mhl-t7p.js";import{E as p}from"./Employee-BAk2o20h.js";import{d as c,o as l,T as u,a as d}from"./objectTableStoryHelpers-85UQZMQE.js";import{O as y}from"./object-table-eg2Ovt-Q.js";import"./preload-helper-2-bSzNok.js";import"./Table-D--gYOqV.js";import"./index-DLwVeEDH.js";import"./Dialog-DKS_NXyx.js";import"./cross-BxadJhVG.js";import"./svgIconContainer-CyuT4HfV.js";import"./useBaseUiId-Bh3N5ha8.js";import"./InternalBackdrop-DXMaIFV2.js";import"./composite-BrIxwnLH.js";import"./index-OPTHOOv0.js";import"./index-Bu--4y7I.js";import"./index-Tjhqt3OQ.js";import"./useEventCallback-CNFNRke6.js";import"./SkeletonBar-b_mwkMRo.js";import"./LoadingCell-DY7vryxa.js";import"./ColumnConfigDialog-B7qteAZY.js";import"./DraggableList-BVtyyBy7.js";import"./search-D7Fjt3EB.js";import"./Input-I-tMjIxS.js";import"./useControlled-DUeDJrRa.js";import"./Button-UyWDtgNb.js";import"./small-cross-D0judFsk.js";import"./ActionButton-Cpo6HN-_.js";import"./Checkbox-DAHGkPTP.js";import"./useValueChanged-C24owQWg.js";import"./CollapsiblePanel-BpstIy43.js";import"./MultiColumnSortDialog-CgFzhLaC.js";import"./MenuTrigger-Cj3O9yW6.js";import"./CompositeItem-5J0YQgr0.js";import"./ToolbarRootContext-BOy6SvVL.js";import"./getDisabledMountTransitionStyles-DF28N6ey.js";import"./getPseudoElementBounds-CLW-4ULW.js";import"./chevron-down-e01h8LWn.js";import"./index-CJy79Nz_.js";import"./error-BiztdMkG.js";import"./BaseCbacBanner-C4A370vT.js";import"./makeExternalStore-D2tKT-RY.js";import"./Tooltip-DXYTZf_a.js";import"./PopoverPopup-DXkzJyEf.js";import"./debounce-OjmEHQ7v.js";import"./useOsdkClient-DfVrbY5l.js";import"./tick-BjY98-U-.js";import"./DropdownField-DIj8_iWU.js";import"./isEqual-Cmq5HL7k.js";import"./withOsdkMetrics-OSElLXNz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...l,title:"Components/ObjectTable"},n={args:{objectType:p,columnDefinitions:c},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(y,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(u),await d(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
