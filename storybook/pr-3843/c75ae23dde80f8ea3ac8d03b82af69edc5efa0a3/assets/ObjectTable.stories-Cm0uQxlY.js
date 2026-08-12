import{j as i}from"./iframe-acnc8jNP.js";import{O as p}from"./object-table-DCXf91CR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DwMPNbM_.js";import"./preload-helper-C0AHc0KZ.js";import"./Table-BUScjFao.js";import"./index-B2HcsiAS.js";import"./Dialog-HaPlI8uU.js";import"./cross-Bv8-5PKG.js";import"./svgIconContainer-DjMgejtG.js";import"./useBaseUiId-W2eivYCg.js";import"./InternalBackdrop-DEpxkWNz.js";import"./composite-DX6f7iaw.js";import"./index-BRGNHgC5.js";import"./index-BZeQ4uGI.js";import"./index-DIXvuYY6.js";import"./useEventCallback-D6SuZGFS.js";import"./SkeletonBar-DUBCMOxI.js";import"./LoadingCell-zw8kua-H.js";import"./ColumnConfigDialog-LAbRKII0.js";import"./DraggableList-BgUJx3xd.js";import"./search-D7Py9QCX.js";import"./Input-D_7AcYF3.js";import"./useControlled-CL58-5q6.js";import"./isEqual-C5oNx3i8.js";import"./isObject--zvNkZur.js";import"./Button-xirM2J2C.js";import"./ActionButton-DUgA3cC-.js";import"./Checkbox-CWlt2fz8.js";import"./useValueChanged-mNBps3Y1.js";import"./CollapsiblePanel-D_KXlm7t.js";import"./MultiColumnSortDialog-UIRp81gn.js";import"./MenuTrigger-kvlxu44D.js";import"./CompositeItem-uY-l1SPS.js";import"./ToolbarRootContext-D5eO9Pgy.js";import"./getDisabledMountTransitionStyles-DYJIGaAY.js";import"./getPseudoElementBounds-BJR6wqVc.js";import"./chevron-down-C9q_0P71.js";import"./index-B43oBquw.js";import"./error-Cxeuitdp.js";import"./BaseCbacBanner-BkMUSz5_.js";import"./makeExternalStore-C2yWrJUB.js";import"./Tooltip-BLq25BG6.js";import"./PopoverPopup-Dq0wusve.js";import"./toNumber-Bq_nqWh9.js";import"./useOsdkClient-Ddp12YXU.js";import"./tick-W5cBIuY2.js";import"./DropdownField-Bhkpabkk.js";import"./withOsdkMetrics-D-f8kfgF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
