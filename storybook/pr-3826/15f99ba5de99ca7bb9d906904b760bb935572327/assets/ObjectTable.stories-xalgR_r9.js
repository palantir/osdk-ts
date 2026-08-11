import{j as i}from"./iframe-BWI0v7bU.js";import{O as p}from"./object-table-BRvhrzEG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-1qbbjoYP.js";import"./preload-helper-BKzGVzbV.js";import"./Table-honY6tNZ.js";import"./index-CKp8zefp.js";import"./Dialog-DUaL9mZT.js";import"./cross-CQNQC0A7.js";import"./svgIconContainer-BKP6lsya.js";import"./useBaseUiId-CbtuVGLX.js";import"./InternalBackdrop-Dag6gQTJ.js";import"./composite-ZOXtixD3.js";import"./index-CR1j9JlH.js";import"./index-D5lI-f2a.js";import"./index-CJ6lkdfM.js";import"./useEventCallback-C6A6kczn.js";import"./SkeletonBar-Bb26MY-Y.js";import"./LoadingCell-Bjhz2UEa.js";import"./ColumnConfigDialog-DLH6MmS0.js";import"./DraggableList-BeyHP_PC.js";import"./search-YfthYXya.js";import"./Input-27_mh9Q3.js";import"./useControlled-C6y9E1N5.js";import"./isEqual-iHLCH-uF.js";import"./isObject-5AKoso39.js";import"./Button-BwmiKCl4.js";import"./ActionButton-_XxrJ1yy.js";import"./Checkbox-BhY0xLP8.js";import"./useValueChanged-CZxF32bS.js";import"./CollapsiblePanel-DrjipFXe.js";import"./MultiColumnSortDialog-45Jb9qWW.js";import"./MenuTrigger-Bvupqx4u.js";import"./CompositeItem-yLYz58Jp.js";import"./ToolbarRootContext-raUjAPMX.js";import"./getDisabledMountTransitionStyles-csXBmIEf.js";import"./getPseudoElementBounds-DvNeRd17.js";import"./chevron-down-D6XjoOpy.js";import"./index-CU_s30uq.js";import"./error-YPxJU-tx.js";import"./BaseCbacBanner-C0i6JqbQ.js";import"./makeExternalStore-CmPHT6zT.js";import"./Tooltip-DWzcSW26.js";import"./PopoverPopup-C2vcW2fT.js";import"./toNumber-Cio0DWgy.js";import"./useOsdkClient-CgaW35u6.js";import"./tick-Bo-Yppgv.js";import"./DropdownField-CI-_pGHR.js";import"./withOsdkMetrics-CnoY1REH.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
