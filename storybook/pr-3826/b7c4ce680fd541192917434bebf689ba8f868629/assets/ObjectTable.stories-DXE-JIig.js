import{j as i}from"./iframe-Bbf4FjDU.js";import{O as p}from"./object-table-BEJj6W1i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CHBXzezl.js";import"./preload-helper-YaXZfCQV.js";import"./Table-2zm3-vg7.js";import"./index-DLE1jPtg.js";import"./Dialog-BFzKEiSE.js";import"./cross-CgPr2XxJ.js";import"./svgIconContainer-4ZiBMY0_.js";import"./useBaseUiId-BRh9XTyf.js";import"./InternalBackdrop-D5iuAy2S.js";import"./composite-B1F8KCAM.js";import"./index-BoMF0LF3.js";import"./index-D4hTQg7R.js";import"./index-CqmIA71W.js";import"./useEventCallback-CtrepMqV.js";import"./SkeletonBar-D6LzTyhc.js";import"./LoadingCell-DT_00f0o.js";import"./ColumnConfigDialog-DBotSK5e.js";import"./DraggableList-C8UKpv7q.js";import"./search-DsV4MpL_.js";import"./Input-g6XLjkNm.js";import"./useControlled-DoIPYusQ.js";import"./isEqual-HDG9Vt9K.js";import"./isObject-CZhzqWAx.js";import"./Button-BYft6qk9.js";import"./ActionButton-4Yza-xVC.js";import"./Checkbox-DG02Q9E8.js";import"./useValueChanged-Buh7nJZV.js";import"./CollapsiblePanel-Bt6kdg0r.js";import"./MultiColumnSortDialog-DjvjS0aZ.js";import"./MenuTrigger-tarBq3qg.js";import"./CompositeItem-CqrYPqsZ.js";import"./ToolbarRootContext-BBqjW-rY.js";import"./getDisabledMountTransitionStyles-bb81pDzD.js";import"./getPseudoElementBounds-CK5rS7kv.js";import"./chevron-down-Cc8MIWBV.js";import"./index-C9cY3Iny.js";import"./error-Cvn0KVtL.js";import"./BaseCbacBanner-EyvuuA27.js";import"./makeExternalStore-CCrsK6D4.js";import"./Tooltip-5hr7ViFB.js";import"./PopoverPopup-C2_JgWUB.js";import"./toNumber-BDYQ9irF.js";import"./useOsdkClient-C309Yu_W.js";import"./tick-woGLAbCk.js";import"./DropdownField-BR-MlXyM.js";import"./withOsdkMetrics-CXfNwoqS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
