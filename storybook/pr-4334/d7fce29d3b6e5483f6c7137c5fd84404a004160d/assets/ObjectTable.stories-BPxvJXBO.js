import{j as i}from"./iframe-BrmQZ3gv.js";import{O as p}from"./object-table-CEcHHP_q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CJZSr8Vw.js";import"./preload-helper-bFlMnFhE.js";import"./Table-DnUpQkRl.js";import"./index-BukqnFRF.js";import"./Dialog-C7vXG1dO.js";import"./cross-CyQ2LR1N.js";import"./svgIconContainer-1ZxcqWPt.js";import"./useBaseUiId-DOEJb2YQ.js";import"./InternalBackdrop-B6fWmh38.js";import"./composite-CToHHLnK.js";import"./index-DrxXiExk.js";import"./index-BHysiYNZ.js";import"./index-PCKTTVVz.js";import"./useEventCallback-D7yysNmp.js";import"./SkeletonBar-Bnl4zbTE.js";import"./LoadingCell-645SZiNQ.js";import"./ColumnConfigDialog-BOerTDNx.js";import"./DraggableList-VQAbVc9N.js";import"./search-3yVqV9Ja.js";import"./Input-CJbUQK7W.js";import"./useControlled-BKcLfL-m.js";import"./Button-DFW8ZRr_.js";import"./small-cross-DWB62PqX.js";import"./ActionButton-Cvda-cXU.js";import"./Checkbox-D2C-eWc7.js";import"./useValueChanged-B2eN2qPg.js";import"./CollapsiblePanel-C6bZdZ49.js";import"./MultiColumnSortDialog-DRMFjLTN.js";import"./MenuTrigger-CuPbLnV7.js";import"./CompositeItem-Cj9sjJEA.js";import"./ToolbarRootContext-DVJYWBBz.js";import"./getDisabledMountTransitionStyles-oZQkDeF-.js";import"./getPseudoElementBounds-GhphztYg.js";import"./chevron-down-DjoNZ0eU.js";import"./index-Lz8g2hRL.js";import"./error-BoTJC5k7.js";import"./BaseCbacBanner-Df4PMHpV.js";import"./makeExternalStore-B5wDpA-S.js";import"./Tooltip-B67VaBcv.js";import"./PopoverPopup-CsNA8h91.js";import"./debounce-DktWngHR.js";import"./useOsdkClient-DMIbxZRi.js";import"./tick-DQnQI0KH.js";import"./DropdownField-BDpM5rcW.js";import"./isEqual-DRj2__AA.js";import"./withOsdkMetrics-CjsWDT1I.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
