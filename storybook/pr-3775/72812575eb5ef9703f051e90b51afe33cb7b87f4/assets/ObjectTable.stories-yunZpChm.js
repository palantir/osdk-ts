import{j as i}from"./iframe-O-bmwq56.js";import{O as p}from"./object-table-HATvRvuR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DVTzWkDz.js";import"./preload-helper-6pTVH5-1.js";import"./Table-BzaeSuLP.js";import"./index-C4WTlxbW.js";import"./Dialog-CzNl5D9v.js";import"./cross-CizIoSTz.js";import"./svgIconContainer-Ck6gQcV_.js";import"./useBaseUiId-CZlalpMb.js";import"./InternalBackdrop-D0hVs4S-.js";import"./composite-D_QdLVWO.js";import"./index-CC-chcDG.js";import"./index-BkAaa8ff.js";import"./index-MNStPi2c.js";import"./useEventCallback-DxLgqtGb.js";import"./SkeletonBar-DQPPXuHm.js";import"./LoadingCell-C2n5oLoD.js";import"./ColumnConfigDialog-CZjSikeV.js";import"./DraggableList-B9_L-7e9.js";import"./search-BcZ9FECg.js";import"./Input-By_d8TXu.js";import"./useControlled-CV44Tu2L.js";import"./isEqual-NGXBM-Wx.js";import"./isObject-DyvrnZzL.js";import"./Button-Dk1ohzyh.js";import"./ActionButton-PRi3OqHl.js";import"./Checkbox-D0V80GeS.js";import"./useValueChanged-B_0tW1wq.js";import"./CollapsiblePanel-CO39vAcp.js";import"./MultiColumnSortDialog-Cz1gVPRY.js";import"./MenuTrigger-lzRAnFH9.js";import"./CompositeItem-CMtOHnnd.js";import"./ToolbarRootContext-idxGzI-q.js";import"./getDisabledMountTransitionStyles-DSkNGmBo.js";import"./getPseudoElementBounds-DyX4xqAM.js";import"./chevron-down-C3iVKDWO.js";import"./index-DR49W70f.js";import"./error-B8Kd5ARc.js";import"./BaseCbacBanner-Fj1NUAfB.js";import"./makeExternalStore-CkoSDh27.js";import"./Tooltip-hz6cj3mC.js";import"./PopoverPopup-DrKw__9E.js";import"./toNumber-H__G6wZN.js";import"./useOsdkClient-B0y7KEBr.js";import"./tick-B6A71fOe.js";import"./DropdownField-BHxmjfLF.js";import"./withOsdkMetrics-C9XRYbxI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
