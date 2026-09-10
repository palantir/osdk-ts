import{j as i}from"./iframe-62_AXEOv.js";import{O as p}from"./object-table-m1Z0AFxh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-JshzskMj.js";import"./preload-helper-CFT5weAC.js";import"./Table-D4WJM57i.js";import"./index-BBxmoCpH.js";import"./Dialog-BpsCe6yZ.js";import"./cross-DUPyqLs7.js";import"./svgIconContainer-B2ejb94d.js";import"./useBaseUiId-DxeaWUqe.js";import"./InternalBackdrop-B_mBuTj-.js";import"./composite-D1RGgOF8.js";import"./index-DqKHmJ5-.js";import"./index-IeLwL8MY.js";import"./index-BSNtLGGk.js";import"./useEventCallback-DoO6cpQA.js";import"./SkeletonBar-DIRl3Uz5.js";import"./LoadingCell-L8-tGZYz.js";import"./ColumnConfigDialog-GUtfDEUT.js";import"./DraggableList-UB4FYgy0.js";import"./search-BDESzP6B.js";import"./Input-B1gv6X7f.js";import"./useControlled-BvDlAnVr.js";import"./Button-CHJGiQMj.js";import"./small-cross-Ddj8Sovb.js";import"./ActionButton-DrWj2qAO.js";import"./Checkbox-BTD7rdCY.js";import"./useValueChanged-Dbwftc6q.js";import"./CollapsiblePanel-ByMOZaM4.js";import"./MultiColumnSortDialog-ZPxhpF5i.js";import"./MenuTrigger-CL1wfT6u.js";import"./CompositeItem-BaakSNrp.js";import"./ToolbarRootContext-Cx34GHdJ.js";import"./getDisabledMountTransitionStyles-D7AIJw0A.js";import"./getPseudoElementBounds-BgmToZV8.js";import"./chevron-down-CLeFx5id.js";import"./index-DoWx18q-.js";import"./error-BRCVBLBe.js";import"./BaseCbacBanner-C38X9_W3.js";import"./makeExternalStore-ChHrabzP.js";import"./Tooltip-C03G-SPW.js";import"./PopoverPopup-chxNfS0K.js";import"./debounce-R6klB3y2.js";import"./useOsdkClient-Dn0oXpKF.js";import"./tick-lJjx81-G.js";import"./DropdownField-BNfXsoFz.js";import"./isEqual-CuzkOSau.js";import"./withOsdkMetrics-DHRPDUGo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
