import{j as i}from"./iframe-CfT8oSzl.js";import{O as p}from"./object-table-D-zdFh4O.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BPVQCCdy.js";import"./preload-helper-Ck2G3lhL.js";import"./Table-G9pXBYqy.js";import"./index-BpawNvzq.js";import"./Dialog-CdzqfLeL.js";import"./cross-BDq3cq5E.js";import"./svgIconContainer-ya4CV7y2.js";import"./useBaseUiId-D4xhi0G6.js";import"./InternalBackdrop-DbdxTKbh.js";import"./composite-CCZTgGc-.js";import"./index-DvoLa0A4.js";import"./index-UxUlnqFt.js";import"./index-ClAIatsn.js";import"./useEventCallback-CSvW4qDl.js";import"./SkeletonBar-CQtM8ssv.js";import"./LoadingCell-efDHe_sF.js";import"./ColumnConfigDialog-LKXN3hyw.js";import"./DraggableList-D1pXLlwE.js";import"./search-CeTlWaJs.js";import"./Input-frvZccMj.js";import"./useControlled-C4oVQ_PT.js";import"./Button-RnGlAnHy.js";import"./small-cross-B1GJDPeO.js";import"./ActionButton-Ce-MUeV5.js";import"./Checkbox-BsFDLi46.js";import"./useValueChanged-D06smhY0.js";import"./CollapsiblePanel-CHkL4bVQ.js";import"./MultiColumnSortDialog-DvaS2aUX.js";import"./MenuTrigger-CSaaZI9V.js";import"./CompositeItem-B7Z5vov3.js";import"./ToolbarRootContext-CiSOROzl.js";import"./getDisabledMountTransitionStyles-DSlo8AiB.js";import"./getPseudoElementBounds-B5D0r4zv.js";import"./chevron-down-hfFWURIG.js";import"./index-Ajqy3tvo.js";import"./error-CTOxDA6S.js";import"./BaseCbacBanner-D5RmPoWA.js";import"./makeExternalStore-Bq85hlSU.js";import"./Tooltip-DolSoQfn.js";import"./PopoverPopup-D5R3Wt8N.js";import"./debounce-eSR8WnsM.js";import"./useOsdkClient-CeYb4mIi.js";import"./tick-3Sqmfbum.js";import"./DropdownField-cTMj70TI.js";import"./isEqual-D62eLK_x.js";import"./withOsdkMetrics-BzsRVIUg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
