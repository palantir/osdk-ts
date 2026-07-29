import{j as i}from"./iframe-CC2lhQhY.js";import{O as p}from"./object-table-Bk8sJe75.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-vYiJL-Es.js";import"./preload-helper-BGEdKx02.js";import"./Table-Dyn7jCHO.js";import"./index-DxrvvjMw.js";import"./Dialog-CLh_XWkX.js";import"./cross-BobJNvWM.js";import"./svgIconContainer-CemqUq4J.js";import"./useBaseUiId-CxU7p3iL.js";import"./InternalBackdrop-CVxZg2o4.js";import"./composite-B5KpWypz.js";import"./index-B4bU-WIO.js";import"./index-G7k4NUeX.js";import"./index--6Hdbxki.js";import"./useEventCallback-B2k3oSuK.js";import"./SkeletonBar-BEjckKsG.js";import"./LoadingCell-A4598RHi.js";import"./ColumnConfigDialog-yMj5LoE_.js";import"./DraggableList-CjtZ2GfF.js";import"./search-D1VlmriO.js";import"./Input-BHBF2dwA.js";import"./useControlled-Sp81BiS-.js";import"./isEqual-i6EUZMbe.js";import"./isObject-BVuUAFQC.js";import"./Button-JlKjTSlm.js";import"./ActionButton-CQ0jgdFe.js";import"./Checkbox-Syfedny6.js";import"./useValueChanged-Cvc2Q3RS.js";import"./CollapsiblePanel-DQ1FJNF1.js";import"./MultiColumnSortDialog-DaExg-Du.js";import"./MenuTrigger-ClJV1NnD.js";import"./CompositeItem-CzQFGjti.js";import"./ToolbarRootContext-CvAXAcRN.js";import"./getDisabledMountTransitionStyles-BdLwLQ0g.js";import"./getPseudoElementBounds-xl3NSj_d.js";import"./chevron-down-CeE9KY4s.js";import"./index-BVqzMWPJ.js";import"./error-wpAeIqc3.js";import"./BaseCbacBanner-Cih_iG3k.js";import"./makeExternalStore-DBYDyAtT.js";import"./Tooltip-CVR67wXj.js";import"./PopoverPopup-DdPQi5RD.js";import"./toNumber-D5qJ0LSR.js";import"./useOsdkClient-BUCIn1CU.js";import"./tick-kTuzUJV2.js";import"./DropdownField-l2hEEO-i.js";import"./withOsdkMetrics-D7Ls77C5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
