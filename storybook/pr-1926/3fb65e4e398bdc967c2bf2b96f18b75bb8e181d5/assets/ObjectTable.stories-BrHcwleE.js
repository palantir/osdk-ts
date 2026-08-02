import{j as i}from"./iframe-DytthAgf.js";import{O as p}from"./object-table-DJHUpA5d.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ikd277XP.js";import"./preload-helper-C_4BNbTz.js";import"./Table-CG8VK7f1.js";import"./index-D3tIM5sk.js";import"./Dialog-DL-uZSD8.js";import"./cross-BAoo9bRB.js";import"./svgIconContainer-B3UGUQMc.js";import"./useBaseUiId-Dkek2wV5.js";import"./InternalBackdrop-CKlfqC_d.js";import"./composite-BtiuVRIQ.js";import"./index-BoY2zDED.js";import"./index-lj4n_gzr.js";import"./index-Cg68QRb4.js";import"./useEventCallback-D5hjObTy.js";import"./SkeletonBar-BslgRjWc.js";import"./LoadingCell-CTG-LOZa.js";import"./ColumnConfigDialog-CQpKKnM6.js";import"./DraggableList-CGL30u5r.js";import"./search-DxqwfofF.js";import"./Input-Dmrm85gF.js";import"./useControlled-BiVwljs8.js";import"./isEqual-BI3vA7Ba.js";import"./isObject-DwNdKho2.js";import"./Button-COGmdSd7.js";import"./ActionButton-DIz3vx6C.js";import"./Checkbox-Rnnk1CNA.js";import"./useValueChanged-D2yo41HC.js";import"./CollapsiblePanel-CvnwF6oN.js";import"./MultiColumnSortDialog-zGAxeUw5.js";import"./MenuTrigger-CuvxcAIl.js";import"./CompositeItem-C2b15spo.js";import"./ToolbarRootContext-Tt4yBAJp.js";import"./getDisabledMountTransitionStyles-CW35Y1qZ.js";import"./getPseudoElementBounds-onXc2cOr.js";import"./chevron-down-D-EU7ysh.js";import"./index-Dufg7QH_.js";import"./error-C8qY1hME.js";import"./BaseCbacBanner-4HweScCj.js";import"./makeExternalStore-B--gn_oA.js";import"./Tooltip-t-5z9t1Y.js";import"./PopoverPopup-BIy-JnXN.js";import"./toNumber-Cs5Prda0.js";import"./useOsdkClient-BB_Qjreu.js";import"./tick-afCbX4dN.js";import"./DropdownField-C6kbYpb5.js";import"./withOsdkMetrics-Car_C0r4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
