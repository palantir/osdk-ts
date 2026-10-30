import{j as i}from"./iframe-BNLo1qEo.js";import{O as p}from"./object-table-uts_JE8Y.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BkPjUTbY.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DHy_BrAk.js";import"./index-BWXZWlZP.js";import"./Dialog-BLZKv8--.js";import"./cross-BB9vD9ud.js";import"./svgIconContainer-DNenegb-.js";import"./useBaseUiId-LvnHplFk.js";import"./InternalBackdrop-CG66B4oQ.js";import"./composite-c-IzcIQu.js";import"./index-Df3Yy7kp.js";import"./index-BSoYvY0P.js";import"./index-6ubKDyZX.js";import"./useEventCallback-CJ49gR_Z.js";import"./SkeletonBar-DZBhWtFh.js";import"./LoadingCell-CFpCMolU.js";import"./ColumnConfigDialog-QUBGD9Ee.js";import"./DraggableList-CGZQygd2.js";import"./search-qRqfYCrN.js";import"./Input-CQiU0obq.js";import"./useControlled-CcPprz05.js";import"./Button-LEGGZV5y.js";import"./small-cross-Dh5ayvwP.js";import"./ActionButton-BO9JPDLL.js";import"./Checkbox-CfS-mZPL.js";import"./useValueChanged-C0keAUqj.js";import"./CollapsiblePanel-oBM-mKD1.js";import"./MultiColumnSortDialog-C9odBEvr.js";import"./MenuTrigger-B2bl3dj9.js";import"./CompositeItem-CQcPqlHd.js";import"./ToolbarRootContext-_EVP-k89.js";import"./getDisabledMountTransitionStyles-APnNNLZm.js";import"./getPseudoElementBounds-CQ5R3Z25.js";import"./chevron-down-Cc8GiNOO.js";import"./index-2-OS7oEL.js";import"./error-D0RMWaYW.js";import"./BaseCbacBanner-DGhlbh8N.js";import"./makeExternalStore-Bi3yZCYu.js";import"./Tooltip-CN30f2dN.js";import"./PopoverPopup-pMmoGPXE.js";import"./debounce-DQBK7OpX.js";import"./useOsdkClient-uOgjqpaF.js";import"./tick-DLT-1uqo.js";import"./DropdownField-XjPQJ3lB.js";import"./isEqual-56Js2KWE.js";import"./withOsdkMetrics-BI6Ebbvf.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
