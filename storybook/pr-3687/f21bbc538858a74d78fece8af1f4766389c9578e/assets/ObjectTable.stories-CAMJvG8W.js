import{j as i}from"./iframe-WZlHWuAl.js";import{O as p}from"./object-table-BS2yyFqB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CbavmFf_.js";import"./preload-helper-BqNO_kYB.js";import"./Table-DzYUOamN.js";import"./index-0vBrLGcy.js";import"./Dialog-61zk0m-2.js";import"./cross-8Hm1XohM.js";import"./svgIconContainer-B-i_bEns.js";import"./useBaseUiId-BixrlMbu.js";import"./InternalBackdrop-BwdMjQMe.js";import"./composite-B7hu--yZ.js";import"./index-BntjzrUj.js";import"./index-Bdw5YJLj.js";import"./index-DGEXx3lA.js";import"./useEventCallback-DDX_rz7n.js";import"./SkeletonBar-81KCyxnx.js";import"./LoadingCell-PjzYnJ5y.js";import"./ColumnConfigDialog-CXzLWyzJ.js";import"./DraggableList-C1734WlY.js";import"./search-BgC_pDzB.js";import"./Input-dA6DFlkG.js";import"./useControlled-DYsSBYkU.js";import"./isEqual-Qud4ubs9.js";import"./isObject-vLQbU_Zm.js";import"./Button--FVbK81A.js";import"./ActionButton-CCWCa9K1.js";import"./Checkbox-XzRZFc-W.js";import"./useValueChanged-BupysOrS.js";import"./CollapsiblePanel-DTEsxWXa.js";import"./MultiColumnSortDialog-CT0IyEHL.js";import"./MenuTrigger-CfrEf1Q3.js";import"./CompositeItem-CezuKAKD.js";import"./ToolbarRootContext-BAoi7Hqr.js";import"./getDisabledMountTransitionStyles-UJn44PGJ.js";import"./getPseudoElementBounds-ConDPen6.js";import"./chevron-down-YKEUt5BK.js";import"./index-D0Os6pCH.js";import"./error-Dm7h3fk8.js";import"./BaseCbacBanner-DncYBeT4.js";import"./makeExternalStore-otuFfb0r.js";import"./Tooltip-ChWSLUgR.js";import"./PopoverPopup-DQXEljrv.js";import"./toNumber-C9tQGy0i.js";import"./useOsdkClient-DaEGhStw.js";import"./tick-CpCiF0s6.js";import"./DropdownField-BkRnf6XA.js";import"./withOsdkMetrics-ClykSytW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
